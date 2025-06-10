        // VAPI Configuration
        const VAPI_PUBLIC_KEY = 'ca9ef318-05b0-4010-939a-e8ee43c1eadb';
        const VAPI_ASSISTANT_ID = 'your-assistant-id'; // You'll need to create this in VAPI dashboard

        // Initialize VAPI
        let vapi;
        let isVapiLoaded = false;
        let isCallActive = false;
        let currentConversation = [];

        // Load VAPI SDK
        function loadVapiSDK() {
            return new Promise((resolve, reject) => {
                if (window.Vapi) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/index.js';
                script.onload = () => {
                    console.log('VAPI SDK loaded successfully');
                    resolve();
                };
                script.onerror = () => {
                    console.error('Failed to load VAPI SDK');
                    reject(new Error('Failed to load VAPI SDK'));
                };
                document.head.appendChild(script);
            });
        }

        // Initialize VAPI client
        async function initializeVapi() {
            try {
                await loadVapiSDK();

                vapi = new window.Vapi(VAPI_PUBLIC_KEY);
                isVapiLoaded = true;

                // Set up event listeners
                setupVapiEventListeners();

                console.log('VAPI initialized successfully');

                // Enable voice button
                const voiceBtn = document.getElementById('voiceButton');
                if (voiceBtn) {
                    voiceBtn.disabled = false;
                    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                }

            } catch (error) {
                console.error('Failed to initialize VAPI:', error);
                showErrorMessage('Voice feature is currently unavailable');
            }
        }

        // Set up VAPI event listeners
        function setupVapiEventListeners() {
            if (!vapi) return;

            // Call started
            vapi.on('call-start', () => {
                console.log('Call started');
                isCallActive = true;
                updateVoiceButton(true);
                showTypingIndicator();
                addBotMessage('🎤 Voice call started. I\'m listening...');
            });

            // Call ended
            vapi.on('call-end', (callData) => {
                console.log('Call ended:', callData);
                isCallActive = false;
                updateVoiceButton(false);
                hideTypingIndicator();
                addBotMessage('👋 Voice call ended. You can continue typing or start another voice call.');
            });

            // Speech started (user started speaking)
            vapi.on('speech-start', () => {
                console.log('User started speaking');
                showTypingIndicator('Listening...');
            });

            // Speech ended (user stopped speaking)
            vapi.on('speech-end', () => {
                console.log('User stopped speaking');
                showTypingIndicator('Processing...');
            });

            // Message received from assistant
            vapi.on('message', (message) => {
                console.log('Message received:', message);

                if (message.type === 'transcript' && message.transcriptType === 'final') {
                    if (message.role === 'user') {
                        // User's speech transcript
                        addUserMessage(message.transcript);
                    } else if (message.role === 'assistant') {
                        // Assistant's response
                        hideTypingIndicator();
                        addBotMessage(message.transcript);
                    }
                }
            });

            // Error handling
            vapi.on('error', (error) => {
                console.error('VAPI Error:', error);
                isCallActive = false;
                updateVoiceButton(false);
                hideTypingIndicator();
                showErrorMessage('Voice call error: ' + error.message);
            });
        }

        // Start voice call
        async function startVoiceCall() {
            if (!isVapiLoaded) {
                showErrorMessage('Voice feature is not ready yet');
                return;
            }

            if (isCallActive) {
                // End current call
                vapi.stop();
                return;
            }

            try {
                // Start call with assistant configuration
                await vapi.start({
                    // If you have an assistant ID, use it:
                    // assistantId: VAPI_ASSISTANT_ID,

                    // Or configure the assistant inline:
                    assistant: {
                        model: {
                            provider: 'openai',
                            model: 'gpt-3.5-turbo',
                            messages: [
                                {
                                    role: 'system',
                                    content: `You are MediAssist, a virtual health assistant for HealthBridge. You help patients with:
                            - Appointment booking
                            - Doctor availability
                            - Medical information
                            - Patient registration
                            - Prescription queries
                            - General health questions
                            
                            Be helpful, professional, and empathetic. Keep responses concise for voice interaction.
                            If asked about serious medical conditions, always recommend consulting with a real doctor.`
                                }
                            ]
                        },
                        voice: {
                            provider: 'playht',
                            voiceId: 'jennifer' // You can change this to other available voices
                        },
                        firstMessage: "Hello! I'm MediAssist, your virtual health assistant. How can I help you today?"
                    }
                });

            } catch (error) {
                console.error('Failed to start voice call:', error);
                showErrorMessage('Failed to start voice call: ' + error.message);
            }
        }

        // Update voice button appearance
        function updateVoiceButton(isActive) {
            const voiceBtn = document.getElementById('voiceButton');
            if (!voiceBtn) return;

            if (isActive) {
                voiceBtn.innerHTML = '<i class="fas fa-stop"></i>';
                voiceBtn.classList.add('btn-danger');
                voiceBtn.classList.remove('btn-success');
                voiceBtn.title = 'Stop Voice Call';
            } else {
                voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                voiceBtn.classList.add('btn-success');
                voiceBtn.classList.remove('btn-danger');
                voiceBtn.title = 'Start Voice Call';
            }
        }

        // Existing chat functions (updated to work with VAPI)
        function sendMessage() {
            const messageInput = document.getElementById('messageInput');
            const message = messageInput.value.trim();

            if (message === '') return;

            addUserMessage(message);
            messageInput.value = '';

            // Simulate bot response (replace with actual backend integration)
            setTimeout(() => {
                generateBotResponse(message);
            }, 1000);
        }

        function sendQuickMessage(message) {
            addUserMessage(message);
            setTimeout(() => {
                generateBotResponse(message);
            }, 1000);
        }

        function addUserMessage(message) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message user';
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            scrollToBottom();
        }

        function addBotMessage(message) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message bot';

            const botName = document.createElement('div');
            botName.className = 'bot-name';
            botName.textContent = 'MediAssist';

            const botContent = document.createElement('div');
            botContent.innerHTML = message;

            messageDiv.appendChild(botName);
            messageDiv.appendChild(botContent);
            chatMessages.appendChild(messageDiv);
            scrollToBottom();
        }

        function generateBotResponse(userMessage) {
            showTypingIndicator();

            let response = '';
            const lowerMessage = userMessage.toLowerCase();

            // Healthcare-specific responses
            if (lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
                response = `📅 <strong>Appointment Booking</strong><br>
        I can help you book an appointment! Here's what I need:<br>
        • Preferred doctor or specialty<br>
        • Preferred date and time<br>
        • Type of consultation (in-person/online)<br><br>
        Which doctor or specialty would you like to see?`;
            } else if (lowerMessage.includes('doctor') || lowerMessage.includes('availability')) {
                response = `👨‍⚕️ <strong>Doctor Availability</strong><br>
        Our available specialists include:<br>
        • Dr. Smith - Cardiology (Mon-Fri 9AM-5PM)<br>
        • Dr. Johnson - Dermatology (Tue-Sat 10AM-6PM)<br>
        • Dr. Williams - General Medicine (Mon-Sun 8AM-8PM)<br><br>
        Which specialist interests you?`;
            } else if (lowerMessage.includes('medicine') || lowerMessage.includes('medication') || lowerMessage.includes('prescription')) {
                response = `💊 <strong>Medicine Information</strong><br>
        I can provide information about:<br>
        • Common medications and their uses<br>
        • Dosage guidelines<br>
        • Potential side effects<br>
        • Drug interactions<br><br>
        <em>⚠️ Always consult your doctor before starting any medication.</em>`;
            } else if (lowerMessage.includes('register') || lowerMessage.includes('registration')) {
                response = `👤 <strong>Patient Registration</strong><br>
        To register as a new patient, I'll need:<br>
        • Full name and contact details<br>
        • Date of birth<br>
        • Insurance information<br>
        • Emergency contact<br><br>
        Would you like to start the registration process?`;
            } else if (lowerMessage.includes('history') || lowerMessage.includes('medical history')) {
                response = `📋 <strong>Medical History</strong><br>
        Your medical history helps doctors provide better care. It includes:<br>
        • Previous diagnoses<br>
        • Current medications<br>
        • Allergies and reactions<br>
        • Family medical history<br><br>
        Please log in to view your personal medical records.`;
            } else if (lowerMessage.includes('diabetes')) {
                response = `🩺 <strong>Diabetes Information</strong><br>
        Common diabetes medications include:<br>
        • <strong>Metformin</strong> - First-line treatment for Type 2<br>
        • <strong>Insulin</strong> - Essential for Type 1, sometimes Type 2<br>
        • <strong>Glipizide</strong> - Helps pancreas produce more insulin<br><br>
        <em>⚠️ Please consult an endocrinologist for personalized treatment.</em>`;
            } else if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
                response = `🚨 <strong>Emergency Services</strong><br>
        For medical emergencies:<br>
        • Call 108 (Emergency Medical Services)<br>
        • Visit nearest emergency room<br>
        • Our 24/7 helpline: +91 98765 43210<br><br>
        <strong>This chat is not for medical emergencies!</strong>`;
            } else {
                response = `Thank you for your message! 😊<br><br>
        I'm here to help with:<br>
        • 📅 Booking appointments<br>
        • 👨‍⚕️ Doctor information<br>
        • 💊 Medicine queries<br>
        • 👤 Patient registration<br>
        • 📋 Medical history<br><br>
        How can I assist you today?`;
            }

            setTimeout(() => {
                hideTypingIndicator();
                addBotMessage(response);
            }, 1500);
        }

        function showTypingIndicator(text = 'MediAssist is typing...') {
            const indicator = document.getElementById('typingIndicator');
            if (indicator) {
                indicator.style.display = 'block';
                // You can update the text if needed
            }
        }

        function hideTypingIndicator() {
            const indicator = document.getElementById('typingIndicator');
            if (indicator) {
                indicator.style.display = 'none';
            }
        }

        function scrollToBottom() {
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function showErrorMessage(message) {
            addBotMessage(`❌ <strong>Error:</strong> ${message}`);
        }

        // Back to home button functionality
        document.getElementById('backHomeBtn')?.addEventListener('click', function () {
            window.location.href = '../index.html';
        });

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function () {
            console.log('HealthBridge Chat loaded');

            // Initialize VAPI
            initializeVapi();

            // Focus on message input
            const messageInput = document.getElementById('messageInput');
            if (messageInput) {
                messageInput.focus();
            }
        });

        // Clean up on page unload
        window.addEventListener('beforeunload', function () {
            if (vapi && isCallActive) {
                vapi.stop();
            }
        });
