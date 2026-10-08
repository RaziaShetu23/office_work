// ==========================================
// FLOWER DATA
// ==========================================

const data = {

    flowers: [

        // ==================================
        // 1. ROSE
        // ==================================

        {
            id: 1,

            name: "Rose",

            scientific_name: "Rosa rubiginosa",

            family: "Rosaceae",

            origin:
                "Asia, Europe, North America, Northwestern Africa",

            bloom_season:
                "Spring through Fall",

            colors: [
                "Red",
                "Pink",
                "White",
                "Yellow",
                "Orange"
            ],

            description:
                "A woody perennial flowering plant known for its fragrant blooms, prickly stems, and cultural symbolism of love and beauty.",

            image_url:
                "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rosa_rubiginosa_1.jpg"
        },


        // ==================================
        // 2. SUNFLOWER
        // ==================================

        {
            id: 2,

            name: "Sunflower",

            scientific_name: "Helianthus annuus",

            family: "Asteraceae",

            origin:
                "North America",

            bloom_season:
                "Summer to Early Fall",

            colors: [
                "Yellow",
                "Orange",
                "Red-Brown"
            ],

            description:
                "A tall annual plant featuring large daisy-like flower heads that display heliotropism, turning to follow the sun across the sky.",

            image_url:
                "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"
        },


        // ==================================
        // 3. TULIP
        // ==================================

        {
            id: 3,

            name: "Tulip",

            scientific_name: "Tulipa gesneriana",

            family: "Liliaceae",

            origin:
                "Central Asia, Turkey",

            bloom_season:
                "Spring",

            colors: [
                "Red",
                "Purple",
                "Yellow",
                "Pink",
                "White"
            ],

            description:
                "A cup-shaped bulbous spring-blooming plant that comes in almost every color imaginable except true blue.",

            image_url:
                "/tulip.jpg"
        },


        // ==================================
        // 4. ORCHID
        // ==================================

        {
            id: 4,

            name: "Orchid",

            scientific_name: "Phalaenopsis aphrodite",

            family: "Orchidaceae",

            origin:
                "Southeastern Asia, Australia",

            bloom_season:
                "Winter to Spring",

            colors: [
                "White",
                "Pink",
                "Purple",
                "Yellow"
            ],

            description:
                "Popularly known as the Moth Orchid, this epiphytic species produces long-lasting, bilateral blooms with complex petal structures.",

            image_url:
                 "/orchid.avif"
        },


        // ==================================
        // 5. LAVENDER
        // ==================================

        {
            id: 5,

            name: "Lavender",

            scientific_name: "Lavandula angustifolia",

            family: "Lamiaceae",

            origin:
                "Mediterranean",

            bloom_season:
                "Late Spring to Summer",

            colors: [
                "Purple",
                "Violet",
                "Blue-Grey"
            ],

            description:
                "An aromatic evergreen shrub prized for its sweet, soothing fragrance, essential oils, and dense spikes of purple blossoms.",

            image_url:
             "/lavender.webp"
                
        },

        // ==================================
        // 6. LOTUS
        // ==================================

        {
            id: 6,

            name: "Lotus",

            scientific_name: "Nelumbo nucifera",

            family: "Nelumbonaceae",

            origin:
                "Tropical Asia, Queensland",

            bloom_season:
                "Summer",

            colors: [
                "Pink",
                "White"
            ],

            description:
                "An aquatic perennial flower that roots in muddy pond bottoms while floating pristine leaves and blossoms high above the water's surface.",

            image_url:"/lotus.avif"
        },
                

        ]

};



// ==========================================
// GET FLOWER CONTAINER
// ==========================================

const flowerContainer =
    document.getElementById("flowerContainer");



// ==========================================
// CREATE ALL FLOWER CARDS
// ==========================================

data.flowers.forEach(function (flower) {


    // ======================================
    // CREATE COLOR TAGS
    // ======================================

    const colorHTML = flower.colors
        .map(function (color) {

            return `
                <span class="color-tag">
                    ${color}
                </span>
            `;

        })
        .join("");



    // ======================================
    // CREATE FLOWER CARD
    // ======================================

    const card = `

        <article class="flower-card">


            <!-- ==========================
                 IMAGE
            =========================== -->

            <div class="image-wrapper">

                <img
                    class="flower-image"
                    src="${flower.image_url}"
                    alt="${flower.name}"
                    loading="lazy"
                >


                <!-- Flower Number -->

                <div class="image-number">

                    #${String(flower.id).padStart(2, "0")}

                </div>


                <!-- Bloom Season -->

                <div class="season-badge">

                    🌸 ${flower.bloom_season}

                </div>

            </div>



            <!-- ==========================
                 FLOWER INFORMATION
            =========================== -->

            <div class="flower-content">


                <!-- Flower Name -->

                <div class="flower-title">

                    <div>

                        <h2>
                            ${flower.name}
                        </h2>

                        <p class="scientific-name">

                            ${flower.scientific_name}

                        </p>

                    </div>


                    <div class="flower-symbol">

                        ✿

                    </div>

                </div>



                <!-- Divider -->

                <div class="divider"></div>



                <!-- ==========================
                     DESCRIPTION
                =========================== -->

                <div class="description-section">

                    <span class="info-label">

                        ABOUT

                    </span>


                    <p class="description">

                        ${flower.description}

                    </p>

                </div>



                <!-- ==========================
                     FAMILY / ORIGIN / SEASON
                =========================== -->

                <div class="info-grid">


                    <!-- Family -->

                    <div class="info-box">

                        <span class="info-label">

                            FAMILY

                        </span>


                        <strong>

                            ${flower.family}

                        </strong>

                    </div>



                    <!-- Origin -->

                    <div class="info-box">

                        <span class="info-label">

                            ORIGIN

                        </span>


                        <strong>

                            ${flower.origin}

                        </strong>

                    </div>



                    <!-- Bloom Season -->

                    <div class="info-box full-width">

                        <span class="info-label">

                            BLOOMING SEASON

                        </span>


                        <strong>

                            ${flower.bloom_season}

                        </strong>

                    </div>


                </div>



                <!-- ==========================
                     COLORS
                =========================== -->

                <div class="colors-section">

                    <span class="info-label">

                        AVAILABLE COLORS

                    </span>


                    <div class="color-list">

                        ${colorHTML}

                    </div>

                </div>


            </div>

        </article>

    `;



    // ======================================
    // ADD CARD TO HTML
    // ======================================

    flowerContainer.insertAdjacentHTML(
        "beforeend",
        card
    );

});