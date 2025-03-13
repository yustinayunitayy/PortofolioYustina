window.onload = function () {
    let imgmodal = document.getElementById("ImageModal");
    let promodal = document.getElementById("ProjectModal");

    if (imgmodal) {
        imgmodal.style.display = "none";
        imgmodal.style.visibility = "hidden"; 
        imgmodal.style.opacity = "0";
    }
    if (promodal) {
        promodal.style.display = "none";
        promodal.style.visibility = "hidden"; 
        promodal.style.opacity = "0";
    }
    loadProjects();
};


function openImageModal(imageSrc) {
    let modal = document.getElementById("ImageModal");
    let modalImage = document.getElementById("modalImage");

    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.style.display = "flex"; 
        modal.style.visibility = "visible"; 
        modal.style.opacity = "1"; 
    }
}

function closeImageModal() {
    let modal = document.getElementById("ImageModal");

    if (modal) {
        modal.style.display = "none"; 
        modal.style.visibility = "hidden"; 
        modal.style.opacity = "0"; 
    }
}

const projects = [
    {
        title: "Ethereal AI Chatbot",
        fulltitle:"Ethereal AI Chatbot - Voice Mental Health Chatbot with Emergency Detection and Location Tracking",
        description: "Ethereal AI is a real-time emergency detection chatbot with 96% accuracy, supporting text and speech inputs. It instantly alerts admins and tracks user IP geolocation for swift response. Built with HTML, CSS, JavaScript, Python, and Flask.",
        fullDescription: "Ethereal AI is a chatbot designed for real-time emergency detection and user location tracking. It handles both text and speech inputs with a neural network model trained to identify emergencies with 96% accuracy. The system provides admin immediate emergency warnings and tracks user IP geolocation to ensure fast reactions. Ethereal AI is built with HTML, CSS, and JavaScript for the user interface with Python and Flask for backend functionality.",
        caption1: "Here is the demo video",
        caption2: "Here is the project overview",
        images: ["images/Project/Ethereal/0.png", "images/Project/Ethereal/1.png", "images/Project/Ethereal/2.png", "images/Project/Ethereal/3.png", 
                ,"images/Project/Ethereal/4.png", "images/Project/Ethereal/5.png", "images/Project/Ethereal/6.png", "images/Project/Ethereal/7.png",
                ,"images/Project/Ethereal/8.png", "images/Project/Ethereal/9.png", "images/Project/Ethereal/10.png"],
        video: "https://drive.google.com/file/d/1SU_kHFEZlbh8A31Jfolk-daarw57Rcfy/preview"
    },
    {
        title: "Food Ordering System",
        fulltitle:"Food Ordering System using Netbeans and Java",
        description: "Developed using NetBeans, Java, and MySQL, this project features menu management with images, order tracking, and dual user roles (admin & customer). Designed for efficient food ordering and database management, completed in 2-3 weeks",
        fullDescription: "I developed a Food Ordering System using NetBeans for UI design and Java for functionality implementation. The system use MySQL for database management, handling menu lists with images, order records, and user data. It features dual user roles: administrator and customer. The project was successfully completed within a  timeframe of 2-3 weeks.",
        caption1: "Here is the demo video",
        caption2: "Here is the project overview",
        images: ["images/Project/CafeJava/0.png", "images/Project/CafeJava/welcome.png", "images/Project/CafeJava/regis.png", "images/Project/CafeJava/login.png", 
                ,"images/Project/CafeJava/user.png", "images/Project/CafeJava/menu.png", "images/Project/CafeJava/order.png", "images/Project/CafeJava/profile.png",
                ,"images/Project/CafeJava/contact.png","images/Project/CafeJava/admin.png", "images/Project/CafeJava/account.png", "images/Project/CafeJava/menu manage.png", 
                "images/Project/CafeJava/order manage.png"
        ],
        video: "https://drive.google.com/file/d/1vWqCCnZZgqqDthN2VKu-MfKOz0fzLoQJ/preview"
    },
    {
        title: "Canteen Menu List Mobile Programming",
        fulltitle:"Canteen Menu List Mobile Programming using Android Studio",
        description: "Developed a mobile app using Android Studio that lists all campus canteen stores with detailed menu, helping users easily explore and choose their meals.",
        fullDescription: "In this project, I developed a mobile application using Android Studio where this mobile app has the list of all canteen stores on campus, along with detailed menus showcasing the variety of food options available at each location",
        caption1: "Here is the demo video",
        caption2: "Here is the project overview",
        images: ["images/Project/canteen/0.png", "images/Project/canteen/1.png", "images/Project/canteen/2.png", "images/Project/canteen/3.png"
                ,"images/Project/canteen/4.png", "images/Project/canteen/5.png"
        ],
        video: "https://drive.google.com/file/d/1Y2FwuKgWLff9HrsAPqL6ArWXyBfVy6pH/preview"
    },
    {
        title: "BISINDO Sign Language Recognition",
        fulltitle:"BISINDO (Bahasa Indonesia) Sign Language Recognition using Deep Learning",
        description: "My team and I developed a BISINDO Sign Language Recognition system using CNNs and MobileNetV2 that successfully translate gestures in real time.",
        fullDescription: "For our final project in a deep learning course, my team and I developed a project focused on BISINDO (Bahasa Isyarat Indonesia) Sign Language Recognition Using Deep Learning. By collecting and preprocessing a dataset of BISINDO gestures, used Convolutional Neural Networks (CNNs) and the MobileNetV2 model to train our system, Our application  successfully identified and translated several gestures in real-time.",
        caption2: "Here is the project overview",
        images: ["images/Project/Bisindo/0.jpg", "images/Project/Bisindo/1.jpg", "images/Project/Bisindo/2.jpg", "images/Project/Bisindo/3.jpg", "images/Project/Bisindo/4.jpg"]
    },
    {
        title: "Cafe Ordering System",
        fulltitle:"Cafe Ordering System : Web-Based Using PHP and PhpMyAdmin",
        description: "Developed as my SSIP final project, This web-based cafe ordering system uses PHP and SQL with PhpMyAdmin for database management.",
        fullDescription: "This project is a web-based cafe ordering system developed as an individual final project for the SSIP courses. The project uses PHP for scripting and SQL Queries for the database, with PhpMyAdmin for database management. It includes an order form that allows customers to place orders, which are stored in the database using PHP and SQL.",
        caption1: "Here is the demo video",
        caption2: "Here is the project overview",
        images: ["images/Project/CafePHP/0.png", "images/Project/CafePHP/1.png", "images/Project/CafePHP/2.png", "images/Project/CafePHP/3.png"
                , "images/Project/CafePHP/4.png", "images/Project/CafePHP/5.png", "images/Project/CafePHP/6.png", "images/Project/CafePHP/7.png"
        ],
        video: "https://drive.google.com/file/d/1TB6tcY6iHTzTk-Yjc3-42BpnFW_Dh-UP/preview"
    },
];

function openProjectModal(index) {
    document.getElementById("modal-title").innerText = projects[index].fulltitle;
    document.getElementById("modal-description").innerText = projects[index].fullDescription;
    document.getElementById("modal-caption1").innerText = projects[index].caption1;
    document.getElementById("modal-caption1").innerText = projects[index].caption1 || "";
    document.getElementById("modal-caption2").innerText = projects[index].caption2;

    const gallery = document.getElementById("modal-gallery");
    gallery.innerHTML = "";
    projects[index].images.forEach((img, imgIndex) => {
        if (imgIndex > 0) { 
            const imageElement = document.createElement("img");
            imageElement.src = img;
            gallery.appendChild(imageElement);
        }
    });

    const modalVideo = document.getElementById("modal-video");
    if (projects[index].video) {
        modalVideo.innerHTML = `<iframe src="${projects[index].video}" allowfullscreen></iframe>`;
        modalVideo.style.display = "block"; // Pastikan video muncul jika ada
    } else {
        modalVideo.innerHTML = ""; // Hapus kontennya
        modalVideo.style.display = "none"; // Sembunyikan elemen jika tidak ada video
    }



    let modal = document.getElementById("ProjectModal");
    if (modal) {
        modal.style.display = "flex";
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }
}

function closeProjectModal() {
    let modal = document.getElementById("ProjectModal");

    if (modal) {
        modal.style.display = "none"; 
        modal.style.visibility = "hidden"; 
        modal.style.opacity = "0"; 
    }
}


function loadProjects() {
    const container = document.getElementById("projects-list");
    container.innerHTML = "";

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("card");

        const projectImg = document.createElement("img");
        projectImg.src = project.images[0];

        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");
        projectTitle.innerText = project.title;

        const projectDesc = document.createElement("div");
        projectDesc.classList.add("project-desc");
        projectDesc.innerText = project.description;

        const viewBtn = document.createElement("button");
        viewBtn.classList.add("ex-button");
        viewBtn.innerText = "View More";
        viewBtn.onclick = () => openProjectModal(index);

        projectCard.appendChild(projectImg);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDesc);
        projectCard.appendChild(viewBtn);
        container.appendChild(projectCard);
    });
}