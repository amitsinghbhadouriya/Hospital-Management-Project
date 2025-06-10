document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    initializeSearch();
    
    // If we're on search results page, process the search
    if (window.location.pathname.includes('search-results.html')) {
        processSearchResults();
    }
    
    function initializeSearch() {
        // Handle search forms
        const searchForms = document.querySelectorAll('form[role="search"], .search-form, form:has(input[type="search"])');
        searchForms.forEach(form => {
            form.addEventListener('submit', handleSearchSubmit);
        });
        
        // Handle search inputs (Enter key)
        const searchInputs = document.querySelectorAll('input[type="search"], .search-input');
        searchInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    performSearch(this.value.trim());
                }
            });
        });
        
        // Handle search buttons
        const searchButtons = document.querySelectorAll('.search-btn, button[type="submit"]:has(+ input[type="search"])');
        searchButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const input = this.parentElement.querySelector('input[type="search"], .search-input') || 
                             this.closest('form').querySelector('input[type="search"], .search-input');
                if (input) {
                    performSearch(input.value.trim());
                }
            });
        });
        
        // Handle popular search buttons
        const popularButtons = document.querySelectorAll('.popular-search');
        popularButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                performSearch(this.textContent.trim());
            });
        });
    }
    
    function handleSearchSubmit(e) {
        e.preventDefault();
        const input = this.querySelector('input[type="search"], .search-input');
        if (input) {
            performSearch(input.value.trim());
        }
    }
    
    function getSearchResultsPath() {
        // Get the current page's directory structure
        const currentPath = window.location.pathname;
        const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
        
        // Common search results page locations to check
        const possiblePaths = [
            'search-results.html',           // Same directory
            'html/search-results.html',      // From root to html folder
            '../search-results.html',        // One level up
            './search-results.html',         // Current directory explicit
            '/search-results.html',          // From domain root
            '/html/search-results.html'      // From domain root to html folder
        ];
        
        // Determine the most likely path based on current location
        if (currentPath === '/' || currentPath === '/index.html' || !currentPath.includes('/')) {
            // We're at root level
            return 'html/search-results.html';
        } else if (currentPath.includes('/html/')) {
            // We're in html folder or subfolder
            return 'search-results.html';
        } else {
            // We're in some other folder, try to go to html folder
            const pathParts = currentPath.split('/').filter(part => part);
            const htmlIndex = pathParts.indexOf('html');
            
            if (htmlIndex !== -1) {
                // html folder exists in path
                const levelsUp = pathParts.length - htmlIndex - 1;
                return '../'.repeat(levelsUp) + 'search-results.html';
            } else {
                // No html folder in current path, assume it's at root level
                return 'html/search-results.html';
            }
        }
    }
    
    function performSearch(searchTerm) {
        if (!searchTerm || searchTerm.length < 1) {
            alert('Please enter a search term');
            return;
        }
        
        // Get the correct path to search results page
        const searchResultsPath = getSearchResultsPath();
        
        // Navigate to search results page
        window.location.href = `${searchResultsPath}?q=${encodeURIComponent(searchTerm)}`;
    }
    
    function processSearchResults() {
        try {
            // Get search term from URL
            const params = new URLSearchParams(window.location.search);
            const searchTerm = params.get('q');
            
            if (!searchTerm) {
                showNoSearchTerm();
                return;
            }
            
            // Update page elements
            updateSearchTerm(searchTerm);
            
            // Perform search
            const results = searchAll(searchTerm.trim());
            
            // Display results
            displayResults(results, searchTerm);
            
        } catch (error) {
            console.error('Search error:', error);
            showError();
        }
    }
    
    function updateSearchTerm(searchTerm) {
        // Update search term display
        const searchTermElements = document.querySelectorAll('#search-term, .search-term-display');
        searchTermElements.forEach(el => {
            el.textContent = searchTerm;
        });
        
        // Update search input
        const searchInputs = document.querySelectorAll('input[type="search"], .search-input');
        searchInputs.forEach(input => {
            input.value = searchTerm;
        });
    }
    
    function getRelativeUrl(targetPage) {
        // Get current path to determine relative path to target
        const currentPath = window.location.pathname;
        
        if (currentPath.includes('/html/')) {
            // We're in html folder, use relative paths
            return targetPage;
        } else {
            // We're at root or other location, go to html folder
            return 'html/' + targetPage;
        }
    }
    
    function searchAll(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        const results = [];
        
        // Search doctors
        const doctors = [
            { name: "Dr. Vikram J Rao", specialty: "Head Surgical Gastroenterologist & GI Onco Surgeon", hospital: "Fortis Hospital" },
            { name: "Dr. Praveen Gupta", specialty: "Neurologist", hospital: "Fortis Hospital" },
            { name: "Dr. Dheeraj Kapoor", specialty: "Endocrinologist", hospital: "Fortis Hospital" },
            { name: "Dr. Meenakshi Sinha", specialty: "Cardiologist", hospital: "Wockhardt Hospital" },
            { name: "Dr. Shrilata Trasi", specialty: "Obstetrician", hospital: "Narayana Hospital" },
            { name: "Dr. Sanjay Sachdeva", specialty: "ENT Specialist", hospital: "Max Hospital" },
            { name: "Dr. Rahul Sharma", specialty: "Dermatologist", hospital: "Apollo Hospital" },
            { name: "Dr. Priya Patel", specialty: "Pediatrician", hospital: "AIIMS" },
            { name: "Dr. Rajesh Kumar", specialty: "Orthopedic Surgeon", hospital: "Care Hospital" },
            { name: "Dr. Ananya Singh", specialty: "Ophthalmologist", hospital: "Marengo Asia Hospital" },
            { name: "Dr. Suresh Menon", specialty: "Psychiatrist", hospital: "Billroth Hospital" }
        ];
        
        doctors.forEach(doctor => {
            if (matchesDoctor(doctor, term)) {
                results.push({
                    type: 'doctor',
                    title: doctor.name,
                    description: `${doctor.specialty} at ${doctor.hospital}`,
                    url: getRelativeUrl('appointment-booking.html'),
                    score: calculateDoctorScore(doctor, term)
                });
            }
        });
        
        // Search hospitals
        const hospitals = [
            { name: "Fortis Hospital", location: "Multiple locations across India", specialties: "Multi-specialty hospital" },
            { name: "Wockhardt Hospital", location: "Mumbai, Nagpur, Rajkot", specialties: "Cardiology, Orthopedics, Neurology" },
            { name: "Narayana Hospital", location: "Bangalore, Kolkata, Jaipur", specialties: "Cardiac care, Oncology" },
            { name: "Max Hospital", location: "Delhi NCR, Punjab", specialties: "Multi-specialty hospital" },
            { name: "Apollo Hospital", location: "Pan India", specialties: "Multi-specialty hospital" },
            { name: "AIIMS", location: "New Delhi, Bhubaneswar, Jodhpur, Patna", specialties: "Research and tertiary care" },
            { name: "Care Hospital", location: "Hyderabad, Visakhapatnam, Nagpur", specialties: "Cardiology, Neurology" },
            { name: "Marengo Asia Hospital", location: "Faridabad, Gurugram", specialties: "Multi-specialty hospital" },
            { name: "Billroth Hospital", location: "Chennai", specialties: "Surgery, Oncology" }
        ];
        
        hospitals.forEach(hospital => {
            if (matchesHospital(hospital, term)) {
                results.push({
                    type: 'hospital',
                    title: hospital.name,
                    description: `${hospital.location} - ${hospital.specialties}`,
                    url: getRelativeUrl('services.html'),
                    score: calculateHospitalScore(hospital, term)
                });
            }
        });
        
        // Search pages/services with dynamic URLs
        const pages = [
            { title: "Emergency Services", description: "24/7 emergency care with experienced medical professionals", url: "index.html#emergency", keywords: "emergency urgent care 24/7" },
            { title: "Cardiology", description: "Heart care and cardiovascular treatments", url: "services.html#cardiology", keywords: "heart cardiac cardiology cardiovascular" },
            { title: "Neurology", description: "Brain and nervous system treatments", url: "services.html#neurology", keywords: "brain nervous system neurology neurologist" },
            { title: "Orthopedics", description: "Bone and joint care", url: "services.html#orthopedics", keywords: "bone joint orthopedic surgery fracture" },
            { title: "Pediatrics", description: "Children's healthcare", url: "services.html#pediatrics", keywords: "children kids pediatric child baby" },
            { title: "Gynecology", description: "Women's health services", url: "services.html#gynecology", keywords: "women gynecology obstetrics pregnancy" },
            { title: "Book Appointment", description: "Schedule an appointment with our doctors", url: "appointment-booking.html", keywords: "appointment booking schedule doctor" },
            { title: "Contact Us", description: "Get in touch with our hospital", url: "contact.html", keywords: "contact phone address location" },
            { title: "About Us", description: "Learn about our hospital and mission", url: "about.html", keywords: "about hospital mission vision history" },
            { title: "Medicine Information", description: "Information about medications and prescriptions", url: "medicine.html", keywords: "medicine medication prescription drugs pharmacy" }
        ];
        
        pages.forEach(page => {
            if (matchesPage(page, term)) {
                // Handle special case for index.html which might be at root
                let pageUrl = page.url;
                if (pageUrl === 'index.html#emergency') {
                    // Determine if we need to go up to root level
                    const currentPath = window.location.pathname;
                    if (currentPath.includes('/html/')) {
                        pageUrl = '../index.html#emergency';
                    } else {
                        pageUrl = 'index.html#emergency';
                    }
                } else {
                    pageUrl = getRelativeUrl(page.url);
                }
                
                results.push({
                    type: 'page',
                    title: page.title,
                    description: page.description,
                    url: pageUrl,
                    score: calculatePageScore(page, term)
                });
            }
        });
        
        // Sort by score (highest first)
        results.sort((a, b) => b.score - a.score);
        
        return results;
    }
    
    function matchesDoctor(doctor, term) {
        const searchableText = `${doctor.name} ${doctor.specialty} ${doctor.hospital}`.toLowerCase();
        
        // Direct match
        if (searchableText.includes(term)) return true;
        
        // Word starts with term
        const words = searchableText.split(/\s+/);
        return words.some(word => word.startsWith(term));
    }
    
    function matchesHospital(hospital, term) {
        const searchableText = `${hospital.name} ${hospital.location} ${hospital.specialties}`.toLowerCase();
        
        if (searchableText.includes(term)) return true;
        
        const words = searchableText.split(/\s+/);
        return words.some(word => word.startsWith(term));
    }
    
    function matchesPage(page, term) {
        const searchableText = `${page.title} ${page.description} ${page.keywords}`.toLowerCase();
        
        if (searchableText.includes(term)) return true;
        
        const words = searchableText.split(/\s+/);
        return words.some(word => word.startsWith(term));
    }
    
    function calculateDoctorScore(doctor, term) {
        let score = 0;
        const name = doctor.name.toLowerCase();
        const specialty = doctor.specialty.toLowerCase();
        const hospital = doctor.hospital.toLowerCase();
        
        // Exact matches get highest scores
        if (name === term) score += 100;
        if (specialty === term) score += 80;
        if (hospital === term) score += 60;
        
        // Starts with matches
        if (name.startsWith(term)) score += 50;
        if (specialty.startsWith(term)) score += 40;
        if (hospital.startsWith(term)) score += 30;
        
        // Contains matches
        if (name.includes(term)) score += 25;
        if (specialty.includes(term)) score += 20;
        if (hospital.includes(term)) score += 15;
        
        // Word matches
        const nameWords = name.split(/\s+/);
        const specialtyWords = specialty.split(/\s+/);
        const hospitalWords = hospital.split(/\s+/);
        
        nameWords.forEach(word => {
            if (word === term) score += 30;
            else if (word.startsWith(term)) score += 15;
        });
        
        specialtyWords.forEach(word => {
            if (word === term) score += 25;
            else if (word.startsWith(term)) score += 12;
        });
        
        hospitalWords.forEach(word => {
            if (word === term) score += 20;
            else if (word.startsWith(term)) score += 10;
        });
        
        return score;
    }
    
    function calculateHospitalScore(hospital, term) {
        let score = 0;
        const name = hospital.name.toLowerCase();
        const location = hospital.location.toLowerCase();
        const specialties = hospital.specialties.toLowerCase();
        
        if (name === term) score += 100;
        if (location === term) score += 60;
        if (specialties === term) score += 80;
        
        if (name.startsWith(term)) score += 50;
        if (location.startsWith(term)) score += 30;
        if (specialties.startsWith(term)) score += 40;
        
        if (name.includes(term)) score += 25;
        if (location.includes(term)) score += 15;
        if (specialties.includes(term)) score += 20;
        
        return score;
    }
    
    function calculatePageScore(page, term) {
        let score = 0;
        const title = page.title.toLowerCase();
        const description = page.description.toLowerCase();
        const keywords = page.keywords.toLowerCase();
        
        if (title === term) score += 100;
        if (description.includes(term)) score += 30;
        if (keywords.includes(term)) score += 50;
        
        if (title.startsWith(term)) score += 60;
        if (title.includes(term)) score += 40;
        
        return score;
    }
    
    function displayResults(results, searchTerm) {
        const container = document.getElementById('search-results');
        const countElement = document.getElementById('result-count');
        const resultsSection = document.getElementById('results-section');
        const noResultsSection = document.getElementById('no-results-section');
        
        if (!container) {
            console.error('Search results container not found');
            return;
        }
        
        container.innerHTML = '';
        
        if (results.length === 0) {
            showNoResults(searchTerm);
            return;
        }
        
        // Update count
        if (countElement) {
            countElement.textContent = results.length;
        }
        
        // Show results section
        if (resultsSection) {
            resultsSection.style.display = 'block';
        }
        if (noResultsSection) {
            noResultsSection.style.display = 'none';
        }
        
        // Create result elements
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'search-result mb-4 p-3 border rounded';
            
            // Badge
            const badge = document.createElement('span');
            badge.className = 'badge me-2';
            switch (result.type) {
                case 'doctor':
                    badge.className += ' bg-primary';
                    badge.textContent = 'Doctor';
                    break;
                case 'hospital':
                    badge.className += ' bg-success';
                    badge.textContent = 'Hospital';
                    break;
                case 'page':
                    badge.className += ' bg-info';
                    badge.textContent = 'Page';
                    break;
            }
            
            // Title
            const title = document.createElement('h3');
            title.className = 'h5 mb-2';
            const link = document.createElement('a');
            link.href = result.url;
            link.textContent = result.title;
            link.className = 'text-decoration-none';
            title.appendChild(link);
            
            // Description
            const desc = document.createElement('p');
            desc.className = 'mb-0 text-muted';
            desc.textContent = result.description;
            
            // Highlight search terms
            highlightTerm(link, searchTerm);
            highlightTerm(desc, searchTerm);
            
            resultDiv.appendChild(badge);
            resultDiv.appendChild(title);
            resultDiv.appendChild(desc);
            container.appendChild(resultDiv);
        });
    }
    
    function highlightTerm(element, term) {
        if (!element || !term) return;
        
        const text = element.textContent;
        const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
        element.innerHTML = text.replace(regex, '<mark class="bg-warning">$1</mark>');
    }
    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    function showNoSearchTerm() {
        const resultsSection = document.getElementById('results-section');
        const noResultsSection = document.getElementById('no-results-section');
        const noSearchTermSection = document.getElementById('no-search-term-section');
        
        if (resultsSection) resultsSection.style.display = 'none';
        if (noResultsSection) noResultsSection.style.display = 'none';
        if (noSearchTermSection) noSearchTermSection.style.display = 'block';
    }
    
    function showNoResults(searchTerm) {
        const resultsSection = document.getElementById('results-section');
        const noResultsSection = document.getElementById('no-results-section');
        const noResultsSearchTerm = document.getElementById('no-results-search-term');
        
        if (resultsSection) resultsSection.style.display = 'none';
        if (noResultsSection) {
            noResultsSection.style.display = 'block';
            if (noResultsSearchTerm) {
                noResultsSearchTerm.textContent = searchTerm;
            }
        }
    }
    
    function showError() {
        const container = document.getElementById('search-results');
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger">
                    <h4>Search Error</h4>
                    <p>There was an error processing your search. Please try again.</p>
                </div>
            `;
        }
    }
});