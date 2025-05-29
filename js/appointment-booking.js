const citiesByState = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kakinada", "Nellore", "Rajahmundry", "Anantapur", "Kadapa", "Eluru"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat", "Bomdila", "Ziro", "Naharlagun", "Aalo", "Tezu", "Roing", "Changlang"],
    "Assam": ["Guwahati", "Dibrugarh", "Jorhat", "Tezpur", "Silchar", "Nagaon", "Bongaigaon", "Tinsukia", "Goalpara", "Dhubri", "Barpeta"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Munger", "Sasaram", "Siwan", "Arrah", "Begusarai"
    ],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Bhilai", "Korba", "Rajnandgaon", "Jagdalpur", "Dantewada", "Kanker", "Raigarh"
    ],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Quepem", "Sanguem", "Canacona"
    ],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Anand", "Nadiad", "Mehsana", "Junagadh"
    ],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Hisar", "Karnal", "Rohtak", "Sonipat", "Yamunanagar", "Fatehabad"
    ],
    "Himachal Pradesh": ["Shimla", "Dharamshala", "Manali", "Kullu", "Solan", "Hamirpur", "Mandi", "Una", "Bilaspur", "Chamba", "Kinnaur"
    ],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Giridih", "Dumka", "Chatra", "Palamu"
    ],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Belagavi", "Gulbarga", "Shimoga", "Davangere", "Udupi", "Chitradurga"
    ],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Alappuzha", "Kottayam", "Palakkad", "Malappuram", "Kannur", "Wayanad"
    ],
    "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Satna", "Rewa", "Dewas", "Ratlam", "Chhindwara", "Khandwa", "Khargone", "Betul", "Hoshangabad", "Sehore", "Shivpuri", "Tikamgarh", "Damoh", "Panna", "Balaghat", "Morena", "Bhind", "Datia"
    ],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Solapur", "Kolhapur", "Amravati", "Jalna", "Akola", "Ratnagiri", "Satara",
    ],
    "Manipur": ["Imphal", "Thoubal", "Churachandpur", "Bishnupur", "Senapati", "Tamenglong", "Ukhrul"],
    "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Barddhaman", "Williamnagar"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Kolasib"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Mon", "Phek"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Puri", "Angul", "Dhenkanal"
    ],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali", "Hoshiarpur"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner", "Kota"
    ],
    "Sikkim": ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Tirunelveli", "Vellore"
    ],
    "Telangana": ["Hyderabad", "Warangal",
    ],
    "Tripura": ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad", "Ghaziabad", "Meerut", "Bareilly", "Aligarh", "Jhansi", "Muzaffarnagar"
    ],
    "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Roorkee", "Mussoorie",
    ],
    "West Bengal": ["Kolkata"
    ],
    "Delhi": ["New Delhi", "Dwarka", "Rohini", "Janakpuri", "Lajpat Nagar", "Vasant Kunj", "Connaught Place"
    ],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Pulwama", "Rajouri", "Poonch",],
    "Ladakh": ["Leh", "Kargil"],
    "Puducherry": ["Puducherry", "Karaikal"]
};

function populateCities() {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const selectedState = stateSelect.value;

    citySelect.innerHTML = '<option value="" disabled selected>-- Select City --</option>';

    if (selectedState && citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Appointment request submitted successfully!");
            this.reset();
            document.getElementById("city").innerHTML = '<option value="" disabled selected>-- Select City --</option>';
        });
    }
});

const hospitalByCity = {
    "Visakhapatnam": ["Apollo Hospital", "Care Hospital", "KIMS Hospital", "Queen's NRI Hospital", "Gems Hospital", "Sunshine Hospital", "City Hospital", "Vijaya Hospital", "Star Hospital", "MaxCure Hospital"],
    "Vijayawada": ["Care Hospital", "NRI General Hospital", "KIMS Hospital", "Apollo Hospital", "Vijaya Hospital", "MaxCure Hospital", "City Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital"],
    "Guntur": ["NRI General Hospital", "Care Hospital", "KIMS Hospital", "Apollo Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital"],
    "Tirupati": ["Apollo Hospital", "KIMS Hospital", "Care Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital", "Star Hospital"],
    "Kakinada": ["Apollo Hospital", "Care Hospital", "KIMS Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital", "Star Hospital"],
    "Nellore": ["Apollo Hospital", "Care Hospital", "KIMS Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital", "Star Hospital"],
    "Rajahmundry": ["Apollo Hospital", "Care Hospital", "KIMS Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital", "Star Hospital"],
    "Anantapur": ["Apollo Hospital", "Care Hospital", "KIMS Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital", "Star Hospital"],
    "Kadapa": ["Apollo Hospital", "Care Hospital", "KIMS Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital", "Star Hospital"],
    "Eluru": ["Apollo Hospital", "Care Hospital", "KIMS Hospital", "City Hospital", "Vijaya Hospital", "MaxCure Hospital", "Sunshine Hospital", "Gems Hospital", "Queen's NRI Hospital", "Star Hospital"],
    "Itanagar": ["Tomo Riba Institute of Health and Medical Sciences", "TRIHMS Hospital", "Arunachal State Hospital", "Itanagar General Hospital", "Nirjuli Hospital", "Naharlagun District Hospital", "Aalo District Hospital", "Pasighat District Hospital", "Bomdila District Hospital", "Ziro District Hospital"],
    "Tawang": ["Tawang District Hospital", "Tawang General Hospital", "Tawang Medical College Hospital", "Tawang Community Health Centre", "Tawang Civil Hospital", "Tawang Nursing Home", "Tawang Maternity Hospital", "Tawang Eye Hospital", "Tawang Dental Clinic", "Tawang Orthopedic Hospital"],
    "Pasighat": ["Pasighat District Hospital", "Pasighat General Hospital", "Pasighat Medical College Hospital", "Pasighat Community Health Centre", "Pasighat Civil Hospital", "Pasighat Nursing Home", "Pasighat Maternity Hospital", "Pasighat Eye Hospital", "Pasighat Dental Clinic", "Pasighat Orthopedic Hospital"],
    "Bomdila": ["Bomdila District Hospital", "Bomdila General Hospital", "Bomdila Medical College Hospital", "Bomdila Community Health Centre", "Bomdila Civil Hospital", "Bomdila Nursing Home", "Bomdila Maternity Hospital", "Bomdila Eye Hospital", "Bomdila Dental Clinic", "Bomdila Orthopedic Hospital"],
    "Ziro": ["Ziro District Hospital", "Ziro General Hospital", "Ziro Medical College Hospital", "Ziro Community Health Centre", "Ziro Civil Hospital", "Ziro Nursing Home", "Ziro Maternity Hospital", "Ziro Eye Hospital", "Ziro Dental Clinic", "Ziro Orthopedic Hospital"],
    "Naharlagun": ["Naharlagun District Hospital", "Naharlagun General Hospital", "Naharlagun Medical College Hospital", "Naharlagun Community Health Centre", "Naharlagun Civil Hospital", "Naharlagun Nursing Home", "Naharlagun Maternity Hospital", "Naharlagun Eye Hospital", "Naharlagun Dental Clinic", "Naharlagun Orthopedic Hospital"],
    "Aalo": ["Aalo District Hospital", "Aalo General Hospital", "Aalo Medical College Hospital", "Aalo Community Health Centre", "Aalo Civil Hospital", "Aalo Nursing Home", "Aalo Maternity Hospital", "Aalo Eye Hospital", "Aalo Dental Clinic", "Aalo Orthopedic Hospital"],
    "Tezu": ["Tezu District Hospital", "Tezu General Hospital", "Tezu Medical College Hospital", "Tezu Community Health Centre", "Tezu Civil Hospital", "Tezu Nursing Home", "Tezu Maternity Hospital", "Tezu Eye Hospital", "Tezu Dental Clinic", "Tezu Orthopedic Hospital"],
    "Roing": ["Roing District Hospital", "Roing General Hospital", "Roing Medical College Hospital", "Roing Community Health Centre", "Roing Civil Hospital", "Roing Nursing Home", "Roing Maternity Hospital", "Roing Eye Hospital", "Roing Dental Clinic", "Roing Orthopedic Hospital"],
    "Changlang": ["Changlang District Hospital", "Changlang General Hospital", "Changlang Medical College Hospital", "Changlang Community Health Centre", "Changlang Civil Hospital", "Changlang Nursing Home", "Changlang Maternity Hospital", "Changlang Eye Hospital", "Changlang Dental Clinic", "Changlang Orthopedic Hospital"],
    "Guwahati": ["Gauhati Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Dispur Polyclinic", "Hayat Hospital", "Sunrise Hospital", "Down Town Hospital", "Nemcare Hospital", "B Borooah Cancer Institute", "Assam Medical College"],
    "Dibrugarh": ["Dibrugarh Medical College and Hospital", "AMCH Dibrugarh", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic"],
    "Jorhat": ["Jorhat Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Tezpur": ["Tezpur Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Silchar": ["Silchar Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Nagaon": ["Nagaon Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Bongaigaon": ["Bongaigaon Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Tinsukia": ["Tinsukia Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Goalpara": ["Goalpara Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Dhubri": ["Dhubri Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Barpeta": ["Barpeta Medical College and Hospital", "Apollo Hospitals", "GNRC Hospitals", "Sunrise Hospital", "Down Town Hospital", "B Borooah Cancer Institute", "Assam Medical College", "Nemcare Hospital", "Dispur Polyclinic", "AMCH Dibrugarh"],
    "Patna": ["Indira Gandhi Institute of Medical Sciences", "All India Institute of Medical Sciences", "Patna Medical College and Hospital", "Paras HMRI Hospital", "Apollo Hospitals", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital"],
    "Gaya": ["Anugrah Narayan Magadh Medical College", "Gaya Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital"],
    "Bhagalpur": ["Jawaharlal Nehru Medical College and Hospital", "Bhagalpur Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital"],
    "Muzaffarpur": ["Muzaffarpur Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Purnia": ["Purnia Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Darbhanga": ["Darbhanga Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Munger": ["Munger Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Sasaram": ["Sasaram Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Siwan": ["Siwan Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Arrah": ["Arrah Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Begusarai": ["Begusarai Medical College and Hospital", "Apollo Hospitals", "Paras HMRI Hospital", "Max Super Speciality Hospital", "Fortis Hospital", "KIMS Hospital", "Shanti Memorial Hospital", "Anand Hospital", "Patna Medical College and Hospital", "Gaya Medical College and Hospital"],
    "Raipur": ["All India Institute of Medical Sciences", "Dr. Bhimrao Ambedkar Memorial Hospital", "Ramkrishna Care Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Bilaspur": ["Bilaspur Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Durg": ["Durg Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Bhilai": ["Bhilai Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Korba": ["Korba Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Rajnandgaon": ["Rajnandgaon Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Jagdalpur": ["Jagdalpur Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Dantewada": ["Dantewada Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Kanker": ["Kanker Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Raigarh": ["Raigarh Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Shree Narayana Hospital", "Care Hospital", "Manipal Hospital", "Sanjeevani Hospital", "City Hospital", "Ramkrishna Care Hospital", "Dr. Bhimrao Ambedkar Memorial Hospital"],
    "Panaji": ["Goa Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Margao": ["Margao Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Vasco da Gama": ["Vasco Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Mapusa": ["Mapusa Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Ponda": ["Ponda Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Bicholim": ["Bicholim Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Curchorem": ["Curchorem Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Quepem": ["Quepem Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Sanguem": ["Sanguem Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Canacona": ["Canacona Medical College", "Apollo Hospital", "Manipal Hospital", "Healthway Hospital", "Shree Hospital", "Kasturba Hospital", "Sanjeevani Hospital", "City Hospital", "Care Hospital", "MaxCure Hospital"],
    "Ahmedabad": ["Gujarat Cancer Research Institute", "Apollo Hospital", "Sterling Hospital", "CIMS Hospital", "Shalby Hospital", "Zydus Hospital", "Sankalp Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sunrise Hospital", "Care Hospital"],
    "Surat": ["Surat Cancer Hospital", "Apollo Hospital", "New Civil Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital"],
    "Vadodara": ["Sanjivani Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Rajkot": ["Shalby Hospital", "Apollo Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital", "Sanjivani Hospital"],
    "Bhavnagar": ["Bhavnagar Cancer Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Jamnagar": ["Jamnagar Cancer Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Gandhinagar": ["Gandhinagar Cancer Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Anand": ["Anand Cancer Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Nadiad": ["Nadiad Cancer Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Mehsana": ["Mehsana Cancer Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Junagadh": ["Junagadh Cancer Hospital", "Apollo Hospital", "Shalby Hospital", "CIMS Hospital", "Sunrise Hospital", "Care Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Sterling Hospital", "Sankalp Hospital", "New Civil Hospital"],
    "Gurgaon": ["Medanta - The Medicity", "Fortis Memorial Research Institute", "Artemis Hospital", "Max Hospital", "Columbia Asia Hospital", "Park Hospital", "Paras Hospital", "Narayana Superspeciality Hospital", "Sahara Hospital", "Kalyani Hospital"],
    "Faridabad": ["Fortis Escorts Hospital", "Asian Hospital", "Max Hospital", "Narayana Superspeciality Hospital", "Park Hospital", "Columbia Asia Hospital", "Sahara Hospital", "Kalyani Hospital", "Artemis Hospital", "Medanta - The Medicity"],
    "Panipat": ["Max Hospital", "Fortis Memorial Research Institute", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity", "Asian Hospital"],
    "Ambala": ["Fortis Hospital", "Max Hospital", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity", "Asian Hospital"],
    "Hisar": ["Fortis Hospital", "Max Hospital", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity", "Asian Hospital"],
    "Karnal": ["Max Hospital", "Fortis Memorial Research Institute", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity", "Asian Hospital"],
    "Rohtak": ["Post Graduate Institute of Medical Sciences", "Max Hospital", "Fortis Memorial Research Institute", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity"],
    "Sonipat": ["Max Hospital", "Fortis Memorial Research Institute", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity", "Asian Hospital"],
    "Yamunanagar": ["Max Hospital", "Fortis Memorial Research Institute", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity", "Asian Hospital"],
    "Fatehabad": ["Max Hospital", "Fortis Memorial Research Institute", "Narayana Superspeciality Hospital", "Artemis Hospital", "Columbia Asia Hospital", "Park Hospital", "Sahara Hospital", "Kalyani Hospital", "Medanta - The Medicity", "Asian Hospital"],
    "Shimla": ["Indira Gandhi Medical College", "Kamla Nehru Hospital", "IGMC Shimla", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College"],
    "Dharamshala": ["Dr. Rajendra Prasad Government Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Dharamshala Medical College", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Dharamshala General Hospital"],
    "Manali": ["Manali Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Manali General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Manali District Hospital"],
    "Kullu": ["Kullu Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Kullu General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Kullu District Hospital"],
    "Solan": ["Solan Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Solan General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Solan District Hospital"],
    "Mandi": ["Mandi Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Mandi General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Mandi District Hospital"],
    "Hamirpur": ["Hamirpur Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Hamirpur General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Hamirpur District Hospital"],
    "Kinnaur": ["Kinnaur Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Kinnaur General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Kinnaur District Hospital"],
    "Chamba": ["Chamba Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Chamba General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Chamba District Hospital"],
    "Bilaspur": ["Bilaspur Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Bilaspur General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Bilaspur District Hospital"],
    "Una": ["Una Medical College", "Himachal Pradesh Institute of Medical Sciences", "Sanjeevani Hospital", "Una General Hospital", "Himalayan Hospital", "Shivalik Hospital", "Himachal Medical College", "Himalayan Institute of Medical Sciences", "Shivalik Medical College", "Una District Hospital"],
    "Ranchi": ["Rajendra Institute of Medical Sciences", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Jamshedpur": ["Tata Main Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Dhanbad": ["Bokaro General Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Bokaro": ["Bokaro General Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Hazaribagh": ["Hazaribagh Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Deoghar": ["Deoghar Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Giridih": ["Giridih Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Dumka": ["Dumka Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Chatra": ["Chatra Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Palamu": ["Palamu Medical College and Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Bengaluru": ["Bangalore Medical College and Research Institute", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Mysuru": ["Mysore Medical College and Research Institute", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Mangaluru": ["Kasturba Medical College", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Hubli": ["KLE University Medical College", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Belagavi": ["KLE University Medical College", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Gulbarga": ["Gulbarga Institute of Medical Sciences", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Shimoga": ["Shimoga Institute of Medical Sciences", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Davanagere": ["Davangere Institute of Medical Sciences", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Tumakuru": ["Tumkur Institute of Medical Sciences", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Chitradurga": ["Chitradurga Institute of Medical Sciences", "Apollo Hospital", "Manipal Hospital", "Fortis Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Thiruvananthapuram": ["Sree Chitra Tirunal Institute for Medical Sciences and Technology", "Medical College Hospital", "KIMS Hospital", "Apollo Hospital", "Aster Medcity", "Sankara Nethralaya", "Sree Uthradom Thirunal Hospital", "Ananthapuri Hospitals and Research Institute", "Trivandrum Eye Hospital", "Kerala Institute of Medical Sciences"],
    "Kochi": ["Amrita Institute of Medical Sciences", "Lissie Hospital", "Aster Medcity", "Kochi Medical College", "Sree Chitra Tirunal Institute for Medical Sciences and Technology", "Ernakulam Medical College", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital"],
    "Kozhikode": ["Medical College Hospital", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Kollam": ["Kollam Medical College", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Thrissur": ["Government Medical College", "Aster Medcity", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Palakkad": ["Palakkad Medical College", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Malappuram": ["Malappuram Medical College", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Kannur": ["Kannur Medical College", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Wayanad": ["Wayanad Medical College", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Kottayam": ["Kottayam Medical College", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Alappuzha": ["Alappuzha Medical College", "Aster MIMS", "KIMS Hospital", "Apollo Hospital", "Sankara Nethralaya", "Trivandrum Eye Hospital", "Ernakulam Medical College", "Lissie Hospital", "Amrita Institute of Medical Sciences", "Sree Chitra Tirunal Institute for Medical Sciences and Technology"],
    "Indore": ["Indore Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Bhopal": ["Bhopal Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Gwalior": ["Gwalior Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Jabalpur": ["Jabalpur Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Ujjain": ["Ujjain Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Sagar": ["Sagar Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Satna": ["Satna Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Rewa": ["Rewa Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Dewas": ["Dewas Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Ratlam": ["Ratlam Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Chhindwara": ["Chhindwara Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Khandwa": ["Khandwa Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Khargone": ["Khargone Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Betul": ["Betul Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Hoshangabad": ["Hoshangabad Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Sehore": ["Sehore Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Shivpuri": ["Shivpuri Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Tikamgarh": ["Tikamgarh Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Damoh": ["Damoh Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Panna": ["Panna Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Balaghat": ["Balaghat Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Morena": ["Morena Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Bhind": ["Bhind Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Datia": ["Datia Medical College", "Apollo Hospital", "Fortis Hospital", "Manipal Hospital", "Narayana Health City", "Sakra Premium Hospital", "Cloudnine Hospital", "Columbia Asia Hospital", "Aster CMI Hospital", "Motherhood Hospital"],
    "Mumbai": ["Tata Memorial Hospital", "Lilavati Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Fortis Hospital", "Apollo Hospital", "Sanjivani Hospital", "Hiranandani Hospital", "P.D. Hinduja National Hospital", "Breach Candy Hospital", "Sion Hospital"],
    "Pune": ["Sanjivani Hospital", "Ruby Hall Clinic", "Deenanath Mangeshkar Hospital", "KEM Hospital", "Apollo Hospital", "Fortis Hospital", "Sahyadri Hospital", "Jaslok Hospital", "Hiranandani Hospital", "Breach Candy Hospital"],
    "Nagpur": ["Orange City Hospital", "Lata Mangeshkar Hospital", "Indira Gandhi Medical College", "Kasturba Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital"],
    "Nashik": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Aurangabad": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Thane": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Solapur": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Kolhapur": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Amravati": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Jalna": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Akola": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Ratnagiri": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Satara": ["Sanjeevani Hospital", "Sahyadri Hospital", "Apollo Hospital", "Fortis Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Imphal": ["Jawaharlal Nehru Institute of Medical Sciences", "Regional Institute of Medical Sciences", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],
    "Thoubal": ["Thoubal Medical College", "Jawaharlal Nehru Institute of Medical Sciences", "Regional Institute of Medical Sciences", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Churachandpur": ["Churachandpur Medical College", "Jawaharlal Nehru Institute of Medical Sciences", "Regional Institute of Medical Sciences", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Bishnupur": ["Bishnupur Medical College", "Jawaharlal Nehru Institute of Medical Sciences", "Regional Institute of Medical Sciences", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Senapati": ["Senapati Medical College", "Jawaharlal Nehru Institute of Medical Sciences", "Regional Institute of Medical Sciences", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Ukhrul": ["Ukhrul Medical College", "Jawaharlal Nehru Institute of Medical Sciences", "Regional Institute of Medical Sciences", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Tamenglong": ["Tamenglong Medical College", "Jawaharlal Nehru Institute of Medical Sciences", "Regional Institute of Medical Sciences", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital"],
    "Shillong": ["North Eastern Indira Gandhi Regional Institute of Health and Medical Sciences", "Shillong Civil Hospital", "Woodlands Hospital", "Nazareth Hospital", "Bethany Hospital", "Supercare Hospital", "Pine Mount Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Care Hospital"],
    "Tura": ["Tura Medical College"],
    "Jowai": ["Jowai Medical College"],
    "Nongpoh": ["Nongpoh Medical College"],
    "Barddhaman": ["Barddhaman Medical College",],
    "Williamnagar": ["Williamnagar Medical College"],
    "Champai": ["Champa Medical College"],
    "Aizawl": ["Zoram Medical College", "Aizawl Civil Hospital", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Lunglei": ["Lunglei Medical College", "Aizawl Civil Hospital", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Kolasib": ["Kolasib Medical College", "Aizawl Civil Hospital", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Kohima": ["Naga Hospital Authority Kohima", "Kohima Medical College", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Dimapur": ["Dimapur Medical College", "Naga Hospital Authority Kohima", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Zunheboto": ["Zunheboto Medical College", "Naga Hospital Authority Kohima", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Phek": ["Phek Medical College", "Naga Hospital Authority Kohima", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Wokha": ["Wokha Medical College", "Naga Hospital Authority Kohima", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Mokokchung": ["Mokokchung Medical College", "Naga Hospital Authority Kohima", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Mon": ["Mon Medical College", "Naga Hospital Authority Kohima", "Bethany Hospital", "Care Hospital", "Shija Hospitals and Research Institute", "Apollo Hospital", "Max Super Speciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Bhubaneswar": ["All India Institute of Medical Sciences Bhubaneswar", "Kalinga Institute of Medical Sciences", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Cuttack": ["SCB Medical College and Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Rourkela": ["Rourkela Government Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Berhampur": ["MKCG Medical College and Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Balasore": ["Balasore District Headquarters Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Puri": ["Puri District Headquarters Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Kendrapara": ["Kendrapara District Headquarters Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Angul": ["Angul District Headquarters Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Dhenkanal": ["Dhenkanal District Headquarters Hospital", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Ludhiana": ["Dayanand Medical College and Hospital", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Amritsar": ["Guru Nanak Dev Hospital", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Jalandhar": ["Civil Hospital", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Patiala": ["Rajindra Hospital", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Mohali": ["PGIMER", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Hoshiarpur": ["Hoshiarpur Civil Hospital", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Jaipur": ["SMS Medical College", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Jodhpur": ["All India Institute of Medical Sciences Jodhpur", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Udaipur": ["RNT Medical College", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Bikaner": ["PBM Hospital", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Kota": ["MBS Hospital", "Fortis Hospital", "Apollo Hospital", "Max Super Speciality Hospital", "Narayana Superspeciality Hospital", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Gangtok": ["Sikkim Manipal Institute of Medical Sciences", "Central Referral Hospital", "STNM Hospital", "Gangtok District Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],
    "Chennai": ["Madras Medical College", "Apollo Hospital", "Fortis Malar Hospital", "MIOT International", "Sri Ramachandra Medical Centre", "Sankara Nethralaya", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Coimbatore": ["Coimbatore Medical College", "Apollo Hospital", "Fortis Hospital", "MIOT International", "Sri Ramachandra Medical Centre", "Sankara Nethralaya", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Madurai": ["Madurai Medical College", "Apollo Hospital", "Fortis Hospital", "MIOT International", "Sri Ramachandra Medical Centre", "Sankara Nethralaya", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Tiruchirappalli": ["K.A.P. Viswanatham Government Medical College", "Apollo Hospital", "Fortis Hospital", "MIOT International", "Sri Ramachandra Medical Centre", "Sankara Nethralaya", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Tirunelveli": ["Tirunelveli Medical College", "Apollo Hospital", "Fortis Hospital", "MIOT International", "Sri Ramachandra Medical Centre", "Sankara Nethralaya", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Vellore": ["Christian Medical College Vellore", "Apollo Hospital", "Fortis Hospital", "MIOT International", "Sri Ramachandra Medical Centre", "Sankara Nethralaya", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Hyderabad": ["Osmania Medical College", "Apollo Hospital", "Care Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Fortis Hospital"],
    "Warangal": ["Kakatiya Medical College", "Apollo Hospital", "Care Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Fortis Hospital"],
    "Agartala": ["Agartala Government Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Lucknow": ["King George's Medical University", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Kanpur": ["GSVM Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Varanasi": ["Institute of Medical Sciences Banaras Hindu University", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Agra": ["SN Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Meerut": ["Lala Lajpat Rai Memorial Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Allahabad": ["MLN Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Bareilly": ["Rohilkhand Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Ghaziabad": ["Max Super Speciality Hospital", "Apollo Hospital", "Fortis Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital", "Medanta - The Medicity"],
    "Aligarh": ["J.N. Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Jhansi": ["MLB Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Muzaffarnagar": ["Muzaffarnagar Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Dehradun": ["All India Institute of Medical Sciences Rishikesh", "Government Doon Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Haridwar": ["Haridwar Medical College", "All India Institute of Medical Sciences Rishikesh", "Government Doon Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Roorkee": ["Roorkee Medical College", "All India Institute of Medical Sciences Rishikesh", "Government Doon Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Rishikesh": ["All India Institute of Medical Sciences Rishikesh", "Government Doon Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Nainital": ["Nainital Medical College", "All India Institute of Medical Sciences Rishikesh", "Government Doon Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Mussoorie": ["Mussoorie Medical College", "All India Institute of Medical Sciences Rishikesh", "Government Doon Medical College", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital"],
    "Kolkata": ["All India Institute of Medical Sciences Kolkata", "Sanjivani Hospital", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "New Delhi": ["All India Institute of Medical Sciences New Delhi", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital", "Care Hospital"],
    "Dwarka": ["Dwarka Medical College", "All India Institute of Medical Sciences New Delhi", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Rohini": ["Rohini Medical College", "All India Institute of Medical Sciences New Delhi", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Janakpuri": ["Janakpuri Medical College", "All India Institute of Medical Sciences New Delhi", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Vasant Kunj": ["Vasant Kunj Medical College", "All India Institute of Medical Sciences New Delhi", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Connaught Place": ["Connaught Place Medical College", "All India Institute of Medical Sciences New Delhi", "Apollo Hospital", "Fortis Hospital", "Max Super Speciality Hospital", "Narayana Health City", "KIMS Hospital", "Sanjeevani Hospital", "City Hospital", "Shree Narayana Hospital"],
    "Srinagar": ["Sher-i-Kashmir Institute of Medical Sciences", "Srinagar Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Jammu": ["Government Medical College Jammu", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity", "Fortis Hospital"],
    "Pulwama": ["Pulwama Medical College", "Sher-i-Kashmir Institute of Medical Sciences", "Srinagar Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],
    "Rajouri": ["Rajouri Medical College", "Sher-i-Kashmir Institute of Medical Sciences", "Srinagar Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],
    "Poonch": ["Poonch Medical College", "Sher-i-Kashmir Institute of Medical Sciences", "Srinagar Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],
    "Leh": ["Leh Medical College", "Sher-i-Kashmir Institute of Medical Sciences", "Srinagar Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],
    "Kargil": ["Kargil Medical College", "Sher-i-Kashmir Institute of Medical Sciences", "Srinagar Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],
    "Puducherry": ["Jawaharlal Institute of Postgraduate Medical Education and Research", "Puducherry Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital", "Medanta - The Medicity"],
    "Karaikal": ["Karaikal Medical College", "Jawaharlal Institute of Postgraduate Medical Education and Research", "Puducherry Medical College", "Apollo Hospital", "Care Hospital", "Shree Narayana Hospital", "City Hospital", "Sanjeevani Hospital", "KIMS Hospital", "Max Super Speciality Hospital"],

    // Add more cities and hospitals as needed
};

function populateHospitals() {
    const citySelect = document.getElementById("city");
    const hospitalSelect = document.getElementById("hospital");
    const selectedCity = citySelect.value;

    hospitalSelect.innerHTML = '<option value="" disabled selected>-- Select Hospital --</option>';

    if (selectedCity && hospitalByCity[selectedCity]) {
        hospitalByCity[selectedCity].forEach(hospital => {
            const option = document.createElement("option");
            option.value = hospital;
            option.textContent = hospital;
            hospitalSelect.appendChild(option);
        });
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const backHomeBtn = document.getElementById("backHomeBtn");

    backHomeBtn.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
});