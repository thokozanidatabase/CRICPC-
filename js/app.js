/* =========================
   IMAGE CATEGORIES
========================= */

const imageCategories = [

    {
        category: "Leadership Images",

        items: [

            {
                title: "Leadership Conference",
                file: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
            },

            {
                title: "Corporate Team",
                file: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    },



    {
        category: "Salima Images",

        items: [

            {
                title: "Beach View",
                file: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
            },

            {
                title: "Lake Sunset",
                file: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    },



    {
        category: "Blantyre Landscape Images",

        items: [

            {
                title: "Modern City",
                file: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop"
            },

            {
                title: "Urban Landscape",
                file: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    },



    {
        category: "MBRS BO Images",

        items: [

            {
                title: "Business Registration",
                file: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
            },

            {
                title: "Office Documentation",
                file: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    }

];



/* =========================
   VIDEO CATEGORIES
========================= */

const videoCategories = [

    {
        category: "Leadership Videos",

        items: [

            {
                title: "Corporate Presentation",
                file: "https://www.w3schools.com/html/mov_bbb.mp4"
            }

        ]
    },



    {
        category: "Tourism Videos",

        items: [

            {
                title: "Travel Documentary",
                file: "https://www.w3schools.com/html/movie.mp4"
            }

        ]
    }

];



/* =========================
   DESIGN CATEGORIES
========================= */

const designCategories = [

    {
        category: "Poster Designs",

        items: [

            {
                title: "Modern Poster",
                file: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            },

            {
                title: "Creative Flyer",
                file: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    },



    {
        category: "Social Media Designs",

        items: [

            {
                title: "Instagram Campaign",
                file: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    }

];



/* =========================
   BANNER CATEGORIES
========================= */

const bannerCategories = [

    {
        category: "Marketing Banners",

        items: [

            {
                title: "Luxury Campaign",
                file: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
            },

            {
                title: "Business Promotion",
                file: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    },



    {
        category: "Website Banners",

        items: [

            {
                title: "Homepage Banner",
                file: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            }

        ]
    }

];



/* =========================
   CATEGORY CREATOR
========================= */

function createCategory(containerId, categories, type = "image") {

    const container =
    document.getElementById(containerId);

    categories.forEach(section => {

        let cards = "";

        section.items.forEach(item => {

            if(type === "video"){

                cards += `

                <div class="card">

                    <video controls>
                        <source src="${item.file}">
                    </video>

                    <div class="card-content">

                        <h3>${item.title}</h3>

                    </div>

                </div>

                `;

            }else{

                cards += `

                <div class="card">

                    <img src="${item.file}">

                    <div class="card-content">

                        <h3>${item.title}</h3>

                    </div>

                </div>

                `;
            }

        });


        container.innerHTML += `

        <div class="category-section">

            <h2 class="category-title">

                ${section.category}

            </h2>

            <div class="grid">

                ${cards}

            </div>

        </div>

        `;
    });
}



/* =========================
   SHOW SECTION
========================= */

function showSection(sectionId){

    const sections = [
        'images',
        'videos',
        'designs',
        'banners'
    ];

    sections.forEach(id => {

        document
        .getElementById(id)
        .classList.add('hidden');

    });

    document
    .getElementById(sectionId)
    .classList.remove('hidden');
}



/* =========================
   INITIALIZE
========================= */

createCategory("images", imageCategories);

createCategory("videos", videoCategories, "video");

createCategory("designs", designCategories);

createCategory("banners", bannerCategories);
