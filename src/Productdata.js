const Productdata = [
    {
        category: "Buds",
        pic:'https://images.samsung.com/is/image/samsung/assets/dotcom/mobile/june/june-008---what-is-the-difference-between-the-galaxy-buds2,-buds-live-and-buds-pro/1-britishenglish-images-how-do-i-choose-the-right-galaxy-buds.png?$ORIGIN_PNG$',
        products: [
            {
                id: 1,
                name: "SoundPulse A7 True Wireless Earbuds",
                price: "2,499₹",
                 images: [
                    "https://www.mobex.in/cdn/shop/files/51lOZlpsHQL._SL1500.jpg?v=1756035491&width=1500",
                    "https://m.media-amazon.com/images/I/6145DZruu3L.jpg",
                    "https://m.media-amazon.com/images/I/71D8VmYcd1L._AC_UF350,350_QL80_.jpg",
                    "https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/308632_1_cnodus.png"
                ],
                description: "SoundPulse A7 offers rich bass, crystal-clear vocals, and low latency audio designed for music lovers and gamers. With IPX5 water resistance and 28-hour battery backup, these earbuds deliver premium performance at an affordable price.",
                details: {
                    battery_life: "28 hours",
                    water_resistance: "IPX5",
                    bluetooth: "Bluetooth 5.3",
                    charging_port: "Type-C fast charging",
                    special_features: [
                        "Environmental Noise Cancellation",
                        "Low Latency Gaming Mode",
                        "Touch Controls"
                    ]
                }
            },
            {
                id: 2,
                name: "AeroPods X1 Bass Boost Edition",
                price: "1,899₹",
                 images: [
                    "https://www.zeroaudio.in/cdn/shop/files/zerobudsX1_black.jpg?v=1754983949",
                    "https://www.zeroaudio.in/cdn/shop/files/5.jpg?v=1754985906&width=1445",
                    "https://www.zeroaudio.in/cdn/shop/files/zeroaudio_zero_budsx1_black02_cf61d44a-fe88-4420-835d-903ad33f4161.png?v=1754983949&width=1445",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4MIwSvDpcRomWeuxo0EGGXc8dPeU89MZDun0zhfIjOum8sox2abjojLYPtKj8HDcQ6E&usqp=CAU"
                ],
                description: "AeroPods X1 brings deep bass and immersive sound with a lightweight, ergonomic design. Ideal for everyday use, workouts, and travel.",
                details: {
                    battery_life: "20 hours",
                    water_resistance: "IPX4",
                    bluetooth: "Bluetooth 5.0",
                    charging_port: "Micro USB",
                    special_features: [
                        "Bass Boost Technology",
                        "Sweat Resistant",
                        "Auto Pairing"
                    ]
                }
            },
            {
                id: 3,
                name: "ZenBuds Pro ANC",
                price: "4,299₹",
                 images: [
                    "https://m.media-amazon.com/images/I/51C0T-op8nL.jpg",
                    "https://m.media-amazon.com/images/I/71VMahW7crL.jpg",
                    "https://m.media-amazon.com/images/I/616blX+w79L.jpg",
                    "https://cdn.shopify.com/s/files/1/0040/4396/4531/files/Zenbuds_web_SM_1_3.jpg?v=1684493153"
                ],
                description: "Experience premium Active Noise Cancellation with ZenBuds Pro. Designed for travelers and professionals who want distraction-free audio and studio-quality sound.",
                details: {
                    battery_life: "32 hours",
                    water_resistance: "IPX6",
                    bluetooth: "Bluetooth 5.3",
                    charging_port: "Type-C",
                    special_features: [
                        "Hybrid Active Noise Cancellation",
                        "Transparency Mode",
                        "Wireless Charging Support"
                    ]
                }
            },
            {
                id: 4,
                name: "BassFlow T20 Sport Pods",
                price: "1,499₹",
                 images: [
                    "https://5.imimg.com/data5/SELLER/Default/2024/2/394621176/AW/GG/FC/214421337/wireless-bluetooth-earbuds-120h-playtime-bluetooth-5-3-ear-buds-for-sports-hi-fi-stereo-earphones-with-led-display-charging-case-headphones-for-running-workout-audifonos-bluetooth-inalambricos.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxSadQU7birTKYW4HmrIkgYbKxWzExk_bcHg-dXKkXu6v-CXFbyXvtF6Rf1okkkAnM3U&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4a1hM1CusvdqUIfSrnV_16tX9GXJhcTfFNmxCMMYWCmXG1mqyj1oHXhTH5MNU6AqGS0&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3TJPNS3Za1b0uaM3MWR2rIfw3LZIDbPUqNPMxmf1wSWgxNVALSuCye2rr3kf658ifgo&usqp=CAU"
                ],
                description: "Sport-focused earbuds built with flexible ear hooks for a secure fit. Perfect for gym, running, and outdoor activities.",
                details: {
                    battery_life: "18 hours",
                    water_resistance: "IPX7",
                    bluetooth: "Bluetooth 5.1",
                    charging_port: "Type-C",
                    special_features: [
                        "Secure Fit Hooks",
                        "Heavy Bass",
                        "Sweat Proof"
                    ]
                }
            },
            {
                id: 5,
                name: "ClearVoice C5 Calling Earbuds",
                price: "2,199₹",
                images: [
                    "https://media.tatacroma.com/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/315594_0_ka6zzv.png",
                    "https://m.media-amazon.com/images/I/7192zIZKyBL.jpg",
                    "https://m.media-amazon.com/images/I/81tAkI01-DL._AC_UF1000,1000_QL80_.jpg",
                    "https://m.media-amazon.com/images/I/71GJl-oCsRL._AC_UF1000,1000_QL80_.jpg"
                ],
                description: "Crystal-clear calling quality with dual mic noise cancellation. Designed for online meetings, voice calls, and daily communication.",
                details: {
                    battery_life: "24 hours",
                    water_resistance: "IPX4",
                    bluetooth: "Bluetooth 5.2",
                    charging_port: "Type-C",
                    special_features: [
                        "Dual Mic ENC",
                        "Voice Assistant Support",
                        "Touch-Sensitive Controls"
                    ]
                }
            },
            {
                id: 6,
                name: "MiniPods Lite Pocket Edition",
                price: "999₹",
                images: [
                    "https://m.media-amazon.com/images/I/514Rur+L7xL.jpg",
                    "https://m.media-amazon.com/images/I/61SVIsZSWfL.jpg",
                    "https://m.media-amazon.com/images/I/61XLQDEfd6L.jpg",
                    "https://m.media-amazon.com/images/I/61xxOYKtC+L.jpg"
                ],
                description: "Budget-friendly compact earbuds with a minimalist design. Lightweight, portable, and ideal for casual listening.",
                details: {
                    battery_life: "15 hours",
                    water_resistance: "IPX2",
                    bluetooth: "Bluetooth 5.0",
                    charging_port: "Micro USB",
                    special_features: [
                        "Featherlight Build",
                        "Instant Pairing",
                        "Minimalist Case"
                    ]
                }
            },
            {
                id: 7,
                name: "UltraPods Max Studio Edition",
                price: "5,499₹",
                 images: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxbXqkqCXQEjSnlzj33JHqiDySo_4yoSRMA&s",
                    "https://rukminim2.flixcart.com/image/480/640/xif0q/headphone/o/3/1/ultrapods-max-green-clear-audio-with-good-bass-long-battery-original-imah924kfumpbgfr.jpeg?q=90",
                    "https://rukminim2.flixcart.com/image/480/640/xif0q/headphone/7/r/9/max-ultrapods-wireless-earbuds-transparent-charging-case-digital-original-imah8q3bbfwt7mup.jpeg?q=90",
                    "https://m.media-amazon.com/images/I/61WxCNBj-FL._AC_UF1000,1000_QL80_.jpg"
                ],
                description: "High-end studio-grade earbuds with ultra-wide frequency response and cinematic sound. Engineered for audiophiles.",
                details: {
                    battery_life: "36 hours",
                    water_resistance: "IPX5",
                    bluetooth: "Bluetooth 5.4",
                    charging_port: "Type-C + Wireless Charging",
                    special_features: [
                        "Hi-Res Audio Certification",
                        "Spatial Surround Sound",
                        "Adaptive EQ"
                    ]
                }
            },
        ]
    },



    {
        category: "Smart Watches",
        pic:'https://images.hindustantimes.com/tech/img/2024/02/22/1600x900/luke-chesser-M31VSuBSf0g-unsplash_1708590199972_1708590242322.jpg',
        products: [
            {
                id: 11,
                name: "FlexFit Runner GPS Edition",
                price: "5,499₹",
                images: [
                  "https://m.media-amazon.com/images/I/61oesbKJ9nL._AC_UF1000,1000_QL80_.jpg",
                    "https://m.media-amazon.com/images/I/71yID87N2tL._AC_UF1000,1000_QL80_.jpg",
                    "https://m.media-amazon.com/images/I/61US-4AHXiL.jpg",
                    "https://m.media-amazon.com/images/I/71SisxJNX9L._AC_UF350,350_QL80_.jpg"
                ],
                description: "Built for runners and athletes, FlexFit Runner comes with built-in GPS, motion sensors, and real-time performance tracking.",
                details: {
                    display: "1.55-inch LCD Display",
                    battery_life: "12 days",
                    water_resistance: "IP68",
                    connectivity: "Bluetooth 5.0 + GPS",
                    special_features: [
                        "Built-in GPS",
                        "Advanced Sports Analytics",
                        "Step & Calorie Counter"
                    ]
                }
            },
            {
                id: 12,
                category: "Smart Watches",
                name: "ClearVoice C10 Calling Smartwatch",
                price: "2,899₹",
                images: [
                   "https://images-eu.ssl-images-amazon.com/images/I/61BnWt9yNbL._AC_UL495_SR435,495_.jpg",
                    "https://rukminim2.flixcart.com/image/480/640/xif0q/smartwatch/k/d/q/45-21-h9-a1-full-screen-touch-watch-specially-made-for-girl-original-imah4b9775dds8cq.jpeg?q=90",
                    "https://rukminim2.flixcart.com/image/480/640/xif0q/smartwatch/8/x/c/51-054-m6-android-ios-cellecor-yes-original-imah8g43cxezvcbe.jpeg?q=90",
                    "https://m.media-amazon.com/images/I/71lGExC41sL._AC_UF350,350_QL80_.jpg"
                ],
                description: "Crystal-clear calling experience with a built-in microphone, large display, and stylish metal frame.",
                details: {
                    display: "1.9-inch UltraSharp Display",
                    battery_life: "6 days",
                    water_resistance: "IP67",
                    connectivity: "Bluetooth 5.2",
                    special_features: [
                        "Noise-Free Calling",
                        "Voice Assistant",
                        "Weather Updates"
                    ]
                }
            },
            {
                id: 13,
                category: "Smart Watches",
                name: "MiniWatch Lite Compact Edition",
                price: "1,499₹",
                images: [
                    "https://m.media-amazon.com/images/I/61BoaOUf+KL._SX679_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/416361b4-d9e3-4cda-bdbe-c494a6cff59e.__CR0,0,970,600_PT0_SX970_V1___.png",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9ff02d5e-da91-44a2-890e-b9a8e63da613.__CR0,0,970,600_PT0_SX970_V1___.png",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cd5ab419-e713-4894-bf64-18eed2222399.__CR0,0,970,600_PT0_SX970_V1___.png"
                ],
                description: "A compact, lightweight smartwatch perfect for students and casual users, offering basic health and notification features.",
                details: {
                    display: "1.4-inch Color Display",
                    battery_life: "9 days",
                    water_resistance: "IP67",
                    connectivity: "Bluetooth 5.0",
                    special_features: [
                        "Heart Rate Tracking",
                        "Step Counter",
                        "Notification Alerts"
                    ]
                }
            },
            {
                id: 14,
                category: "Smart Watches",
                name: "UltraWatch Max Premium Steel Edition",
                price: "7,999₹",
                images: [
                    "https://m.media-amazon.com/images/I/718aQSkSKmL._SX679_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5de1bd9e-2e49-4b17-9e60-7c86574e6854.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e03cf6ba-b579-44d9-b40b-df643fd8fef7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/291ef64c-4f45-445c-bfe4-0ea934dce74b.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
                ],
                description: "Premium stainless steel build with advanced health suite, AMOLED display, and long battery backup for power users.",
                details: {
                    display: "1.9-inch AMOLED Display",
                    battery_life: "15 days",
                    water_resistance: "5ATM",
                    connectivity: "Bluetooth 5.3",
                    special_features: [
                        "SpO2 + ECG Monitoring",
                        "Premium Steel Body",
                        "Always-On Display"
                    ]
                }
            },
            {
                id: 8,
                category: "Smart Watches",
                name: "FitPro X7 Fitness Smartwatch",
                price: "2,999₹",
                images: [
                    "https://m.media-amazon.com/images/I/41m-lBJQ2hL._SY300_SX300_QL70_FMwebp_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/41adcada-cfe1-4cf9-a801-5f95449dc456.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7611a356-8798-459f-ba6f-7a8b1915f0b9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/52647713-09b5-4c72-baee-018097b1deb4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
                ],
                description: "FitPro X7 is designed for fitness lovers with accurate health tracking, sleep analysis, and 24/7 heart rate monitoring. Lightweight and durable with a HD color display.",
                details: {
                    display: "1.69-inch HD Display",
                    battery_life: "10 days",
                    water_resistance: "IP67",
                    connectivity: "Bluetooth 5.1",
                    special_features: [
                        "Heart Rate Monitoring",
                        "Sleep Tracking",
                        "Step & Calorie Counter"
                    ]
                }
            },
            {
                id: 9,
                category: "Smart Watches",
                name: "AeroWatch S3 Calling Edition",
                price: "3,499₹",
                images: [
                    "https://m.media-amazon.com/images/I/41aZEFf+7LL._SY300_SX300_QL70_FMwebp_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0901a250-fd63-40b9-b3d3-2e5316ee10c7.__CR0,0,970,600_PT0_SX970_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/99a8fec8-a4c4-45ca-80e0-d28e3cbff75b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3ea6451-4b5c-48f5-973c-04aa9412c401.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                ],
                description: "AeroWatch S3 offers Bluetooth calling, built-in speaker, and quick-reply notifications. Ideal for professionals and everyday use.",
                details: {
                    display: "1.8-inch Full Touch AMOLED",
                    battery_life: "7 days",
                    water_resistance: "IP68",
                    connectivity: "Bluetooth 5.2",
                    special_features: [
                        "Bluetooth Calling",
                        "AI Voice Assistant",
                        "Sports Tracking Modes"
                    ]
                }
            },
            {
                id: 10,
                category: "Smart Watches",
                name: "ZenTime Pro Max AMOLED",
                price: "4,999₹",
                images: [
                   "https://m.media-amazon.com/images/I/41szskqocrL._SY300_SX300_QL70_FMwebp_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/300a8c5f-f1d7-43d9-ae6e-ffab53213a92.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f5bd3056-cec0-4cf1-9583-878a02d83e3f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7b229173-cca7-41b3-9830-722fe493cffb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
                ],
                description: "A premium smartwatch with rich AMOLED display, long battery life, and in-depth health tracking. Built for style and performance.",
                details: {
                    display: "1.78-inch AMOLED Always-On",
                    battery_life: "14 days",
                    water_resistance: "5ATM",
                    connectivity: "Bluetooth 5.3",
                    special_features: [
                        "SpO2 Monitoring",
                        "Stress Tracking",
                        "Always-On Display"
                    ]
                }
            }
        ]
    },

    {
        category: "Bluetooth Speakers",
        pic:'https://cdn.mos.cms.futurecdn.net/HHV9gupB6mbvVDbvwquU98-1200-80.jpg',
        products: [
            {
                id: 15,
                name: "BassBlitz R20 Portable Speaker",
                price: "1,799₹",
                images: [
                    "https://m.media-amazon.com/images/I/4181R+nktQS._SY300_SX300_QL70_FMwebp_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/309ef380-b908-40e4-b9a4-98f96628e881.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8140859b-2e71-4ae3-b477-9dc882057744.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/abb30416-c0b7-46f2-98b2-07ce602a5b7c.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
                ],
                description: "A compact yet powerful portable speaker that delivers punchy bass and crisp sound. Ideal for travel, study rooms, or casual music listening.",
                details: {
                    output_power: "10W",
                    battery_life: "8 hours",
                    water_resistance: "IPX5",
                    bluetooth: "Bluetooth 5.0",
                    special_features: [
                        "Deep Bass Radiator",
                        "Hands-free Calling",
                        "Type-C Charging"
                    ]
                }
            },
            {
                id: 16,
                category: "Bluetooth Speakers",
                name: "AeroSound Mini Cube",
                price: "1,299₹",
                images: [
                    "https://m.media-amazon.com/images/I/71P1lmKM+IL._SX522_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/81db3ce5-ad48-4ebe-89e2-94c2d2f0df29.__CR0,0,600,180_PT0_SX600_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/83cdb2cb-9582-46e0-bc33-4da6d0ee9f46.__CR0,0,300,300_PT0_SX300_V1___.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/950e9ae4-1d83-44c4-a7ba-df78be5214cc.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                ],
                description: "A tiny cube-shaped speaker with surprisingly loud output. Perfect for bedside tables, study desks, and small rooms.",
                details: {
                    output_power: "6W",
                    battery_life: "6 hours",
                    water_resistance: "IPX4",
                    bluetooth: "Bluetooth 5.1",
                    special_features: [
                        "Mini Pocket Size",
                        "Surround Sound",
                        "Multiple Color Options"
                    ]
                }
            },
            {
                id: 17,
                category: "Bluetooth Speakers",
                name: "ThunderBoom X50 Party Speaker",
                price: "3,999₹",
                images: [
                   "https://m.media-amazon.com/images/I/41R65YzAvGL._SY300_SX300_QL70_FMwebp_.jpg",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a47edee-1e45-45a2-9700-34156b3c3b0a.__CR0,0,1464,625_PT0_SX1464_V1___.png",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fd523252-c6ea-466e-b67a-f0e117a7eec8.__CR0,0,970,600_PT0_SX970_V1___.png",
                    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a6207299-9fcc-4527-965f-dac7388c049c.__CR0,0,970,600_PT0_SX970_V1___.png"
                ],
                description: "A loud and powerful party speaker with LED lights and superior bass response. Perfect for gatherings, celebrations, and outdoor events.",
                details: {
                    output_power: "40W",
                    battery_life: "12 hours",
                    water_resistance: "IPX6",
                    bluetooth: "Bluetooth 5.2",
                    special_features: [
                        "RGB LED Lights",
                        "Dual Bass Radiators",
                        "FM + AUX + USB Support"
                    ]
                }
            },
            {
                id: 18,
                category: "Bluetooth Speakers",
                name: "WaveBeat S15 Shower Speaker",
                price: "899₹",
                images: [
                   "https://m.media-amazon.com/images/I/71LVrHYXoGL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/81XHENEaDrL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/7126NTTkqfL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/61eMAxUHAyL._SX522_.jpg"
                ],
                description: "A waterproof mini speaker designed for bathrooms, poolside fun, and outdoor adventures.",
                details: {
                    output_power: "5W",
                    battery_life: "7 hours",
                    water_resistance: "IPX7",
                    bluetooth: "Bluetooth 5.0",
                    special_features: [
                        "Suction Cup Mount",
                        "100% Waterproof",
                        "Built-in Microphone"
                    ]
                }
            },
            {
                id: 19,
                category: "Bluetooth Speakers",
                name: "ClearVoice C30 Conference Speaker",
                price: "2,499₹",
                images: [
                   "https://m.media-amazon.com/images/I/81y8cmMBngL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/81H0+R5ofpL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/81BL5H1zkfL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/81Pr+fSDYrL._SX522_.jpg"
                ],
                description: "Designed for meetings, online classes, and calls. Delivers crystal-clear voice with noise reduction technology.",
                details: {
                    output_power: "8W",
                    battery_life: "10 hours",
                    water_resistance: "IPX4",
                    bluetooth: "Bluetooth 5.1",
                    special_features: [
                        "Noise Reduction Mic",
                        "360° Sound Pickup",
                        "One-Touch Mute Button"
                    ]
                }
            },
            {
                id: 20,
                category: "Bluetooth Speakers",
                name: "TravelTune Pocket Soundbar",
                price: "1,699₹",
                images: [
                   "https://m.media-amazon.com/images/I/41HS5qjrmVL._SY300_SX300_QL70_FMwebp_.jpg",
                    "https://m.media-amazon.com/images/I/81BsoIUdDNL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/61ssvnYTw7L._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/61WZC7xUs9L._SX522_.jpg"
                ],
                description: "A slim, travel-friendly soundbar offering clear vocals and enhanced bass for movies and music on the go.",
                details: {
                    output_power: "12W",
                    battery_life: "9 hours",
                    water_resistance: "IPX5",
                    bluetooth: "Bluetooth 5.0",
                    special_features: [
                        "Slim Travel Design",
                        "Stereo Sound",
                        "Type-C Fast Charging"
                    ]
                }
            },
            {
                id: 21,
                category: "Bluetooth Speakers",
                name: "BoomBox Elite 360 Surround",
                price: "5,499₹",
                images: [
                    "https://m.media-amazon.com/images/I/71dV1Nr821L._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/91jMTx-oKhL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/81S5YOcGjyL._SX522_.jpg",
                    "https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/308632_1_cnodus.png"
                ],
                description: "A premium 360° surround-sound speaker with deep bass, long battery life, and studio-grade clarity.",
                details: {
                    output_power: "50W",
                    battery_life: "20 hours",
                    water_resistance: "IPX6",
                    bluetooth: "Bluetooth 5.3",
                    special_features: [
                        "360° Sound Output",
                        "Deep Bass Engine",
                        "Smart Assistant Support"
                    ]
                }
            },
        ]
    },

   {
    category: "Laptops",
    pic:'https://www.jagranimages.com/images/newimg/21092024/21_09_2024-best-laptops-for-programming-student__23801441.webp',
    products: [
        {
            id: 22,
            name: "Apple MacBook Air M2 13-inch",
            price: "104999₹",
            description: "A powerful yet lightweight laptop featuring Apple’s M2 chip, stunning Liquid Retina display, all-day battery life, and silent fanless design. Perfect for professionals, students, and creators.",
            features: [
                "Apple M2 8-core CPU",
                "8GB Unified Memory",
                "256GB SSD Storage",
                "18-hour battery backup",
                "True Tone Retina display"
            ],
            battery_life: "20 hours",
            images: [
                "https://m.media-amazon.com/images/I/41m5SaD3LbL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/71Xsg1rRJkL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/81D4BNbuv9L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/712lN-4vKxL._SX679_.jpg"
            ],
            details: {
                output_power: "50W",
                battery_life: "20 hours",
                water_resistance: "IPX6",
                bluetooth: "Bluetooth 5.3",
                special_features: [
                    "Fanless silent design",
                    "MagSafe fast charging",
                    "Touch ID authentication",
                    "Wide stereo speakers",
                    "Lightweight 1.24kg body"
                ]
            }
        },

        {
            id: 23,
            category: "Laptops",
            name: "Dell XPS 13 Plus",
            price: "129999₹",
            description: "A premium ultrabook with a near-borderless display, fast performance, and elegant aluminum build. Known for its compact design and exceptional productivity features.",
            features: [
                "Intel Core i7 13th Gen",
                "16GB LPDDR5 RAM",
                "512GB SSD",
                "4K UltraSharp Display",
                "InfinityEdge bezels"
            ],
            images: [
                "https://m.media-amazon.com/images/I/418CdEMIMOL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/41uiuE1MU1L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/612z2Anlo9L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/617SuoyqmwL._SX679_.jpg"
            ],
            details: {
                output_power: "50W",
                battery_life: "20 hours",
                water_resistance: "IPX6",
                bluetooth: "Bluetooth 5.3",
                special_features: [
                    "Zero-lattice seamless keyboard",
                    "Haptic touchpad",
                    "4k UltraSharp display",
                    "Premium CNC aluminum body",
                    "EyeSafe blue-light protection"
                ]
            }
        },

        {
            id: 24,
            category: "Laptops",
            name: "HP Pavilion 14",
            price: "64999₹",
            description: "A reliable everyday laptop offering strong performance, lightweight design, and long battery life—ideal for students and office users.",
            features: [
                "Intel Core i5 12th Gen",
                "16GB DDR4 RAM",
                "512GB SSD",
                "Bang & Olufsen speakers",
                "14-inch FHD display"
            ],
            images: [
                "https://m.media-amazon.com/images/I/41MeNLFu0LL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/81BUgxfxC0L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/81OeUllp8BL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/81OeUllp8BL._SX679_.jpg"
            ],
            details: {
                output_power: "50W",
                battery_life: "20 hours",
                water_resistance: "IPX6",
                bluetooth: "Bluetooth 5.3",
                special_features: [
                    "HP Fast Charge",
                    "Micro-edge bezel display",
                    "Lightweight 1.4kg body",
                    "Enhanced cooling system",
                    "B&O tuned speakers"
                ]
            }
        },

        {
            id: 25,
            category: "Laptops",
            name: "Lenovo Legion 5 Pro",
            price: "124999₹",
            description: "A high-performance gaming laptop with advanced cooling, 165Hz display, and powerful GPU for smooth AAA gaming and content creation.",
            features: [
                "AMD Ryzen 7 6800H",
                "RTX 3060 6GB",
                "16GB DDR5 RAM",
                "1TB SSD",
                "16-inch 165Hz QHD+ display"
            ],
            images: [
                "https://m.media-amazon.com/images/I/41M3NNQf5TL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/51WMovgLZbL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/41KayMfNtfL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/31FjYRQqUyL._SX679_.jpg"
            ],
            details: {
                output_power: "50W",
                battery_life: "20 hours",
                water_resistance: "IPX6",
                bluetooth: "Bluetooth 5.3",
                special_features: [
                    "ColdFront 4.0 cooling",
                    "165Hz QHD+ gaming screen",
                    "AI performance optimizer",
                    "Dolby Atmos tuned sound",
                    "4-zone RGB backlit keyboard"
                ]
            }
        },

        {
            id: 26,
            category: "Laptops",
            name: "Asus ROG Strix G17",
            price: "139999₹",
            description: "A powerful gaming laptop designed for esports, featuring a high-refresh display, RGB keyboard, and advanced GPU performance.",
            features: [
                "AMD Ryzen 9 series",
                "RTX 3070 8GB",
                "16GB DDR5 RAM",
                "1TB SSD",
                "17.3-inch 144Hz display"
            ],
            images: [
                "https://m.media-amazon.com/images/I/41uLkKW1JOL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/81a28nW5V7L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71qUwhXnT4L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71th5qqWkhL._SX679_.jpg"
            ],
            details: {
                output_power: "50W",
                battery_life: "20 hours",
                water_resistance: "IPX6",
                bluetooth: "Bluetooth 5.3",
                special_features: [
                    "ROG Intelligent Cooling",
                    "Aura Sync full RGB",
                    "Dedicated MUX Switch",
                    "AI Noise Cancellation Mic",
                    "High-airflow gaming chassis"
                ]
            }
        },

        {
            id: 27,
            category: "Laptops",
            name: "Acer Aspire 7",
            price: "58999₹",
            description: "A performance-focused laptop suitable for students, coding, and light gaming with its dedicated NVIDIA GPU and fast processor.",
            features: [
                "Intel Core i5 12th Gen",
                "NVIDIA GTX 1650",
                "8GB DDR4 RAM",
                "512GB SSD",
                "15.6-inch FHD IPS display"
            ],
            images: [
                "https://m.media-amazon.com/images/I/41m5SaD3LbL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/71Xsg1rRJkL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71f4aDGQkCL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/7122NwlHdwL._SX679_.jpg"
            ],
            details: {
                output_power: "50W",
                battery_life: "20 hours",
                water_resistance: "IPX6",
                bluetooth: "Bluetooth 5.3",
                special_features: [
                    "Dual-fan cooling",
                    "Acer TrueHarmony audio",
                    "Backlit keyboard",
                    "IPS high-clarity panel",
                    "NVIDIA Battery Boost"
                ]
            }
        },

        {
            id: 28,
            category: "Laptops",
            name: "MSI Prestige 14 Evo",
            price: "89999₹",
            description: "A thin and lightweight productivity laptop built for creators and professionals who need speed, portability, and premium build quality.",
            features: [
                "Intel Core i7 Evo Platform",
                "16GB LPDDR4X RAM",
                "512GB NVMe SSD",
                "14-inch FHD+ display",
                "Fingerprint sensor"
            ],
            images: [
                "https://m.media-amazon.com/images/I/41b2b5kzAZL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/41b2b5kzAZL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/71U655BLHQL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71U655BLHQL._SX679_.jpg"
            ],
            details: {
                output_power: "50W",
                battery_life: "20 hours",
                water_resistance: "IPX6",
                bluetooth: "Bluetooth 5.3",
                special_features: [
                    "MIL-STD-810G durability",
                    "Thunderbolt 4 support",
                    "Ultra-light 1.2kg body",
                    "AI background noise reduction",
                    "Fast boot with IR face unlock"
                ]
            }
        }
    ]
}

,


    {
    category: "Televisions",
    pic: "https://rukminim2.flixcart.com/fk-p-flap/824/366/image/1a97512ec6a50f3a.jpg?q=90",
    products: [
        {
            id: 29,
            name: "Samsung Crystal 4K UHD",
            price: "₹27,999",
            images: [
                "https://m.media-amazon.com/images/I/41liFNuBfDL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/814XjusnsXL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/81OhebmQbZL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/71GQ9U9H90L._SX522_.jpg"
            ],
            description: "A vibrant 4K TV with Crystal Processor for enhanced colors, HDR support, and smooth performance for streaming.",
            details: {
                size: "43-inch",
                resolution: "4K UHD",
                features: "HDR10+, PurColor, Smart TV",
                refreshRate: "60Hz",
                connectivity: "WiFi, Bluetooth, 3x HDMI",
                special_features: [
                    "Crystal Processor 4K",
                    "Voice Assistant Support",
                    "Bezel-Less Design"
                ]
            }
        },
        {
            id: 30,
            category: "Televisions",
            name: "LG 4K Smart TV",
            price: "₹31,999",
            images: [
                "https://m.media-amazon.com/images/I/51nwwZkt6gL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/81vGbfeIFYL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/9196O7r-bpL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/71cZ-+Ul6BL._SX522_.jpg"
            ],
            description: "WebOS-powered 4K TV with Active HDR and AI Sound for an immersive viewing and audio experience.",
            details: {
                size: "43-inch",
                resolution: "4K UHD",
                features: "AI Sound, Active HDR, WebOS",
                refreshRate: "60Hz",
                connectivity: "WiFi, Bluetooth, 2x HDMI",
                special_features: [
                    "AI Sound Engine",
                    "Magic Remote Support",
                    "Home Dashboard"
                ]
            }
        },
        {
            id: 31,
            category: "Televisions",
            name: "Sony Bravia 4K Ultra HD",
            price: "₹49,999",
            images: [
                "https://m.media-amazon.com/images/I/51z2Xtof03L._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/81gLIG8BoGL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/813hSiWvyIL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/81wyAVPzpRL._SX522_.jpg"
            ],
            description: "High-quality display with powerful X1 processor, Triluminos Pro color engine, and Dolby Vision.",
            details: {
                size: "43-inch",
                resolution: "4K UHD",
                features: "Dolby Vision, Google TV, X1 Processor",
                refreshRate: "60Hz",
                connectivity: "WiFi, 3x HDMI, 2x USB",
                special_features: [
                    "X1 4K Processor",
                    "Triluminos Pro Display",
                    "Dolby Atmos Support"
                ]
            }
        },
        {
            id: 32,
            category: "Televisions",
            name: "Xiaomi Smart TV 5X",
            price: "₹28,999",
            images: [
                "https://m.media-amazon.com/images/I/51YfIWw9L3L._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/71dFqHF4MLL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/61WrfRuN8RL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/71fQzwNOiZL._SX522_.jpg"
            ],
            description: "Value-packed 4K TV with vivid picture engine, Dolby Audio, and Google TV support.",
            details: {
                size: "43-inch",
                resolution: "4K UHD",
                features: "Dolby Audio, Vivid Picture Engine",
                refreshRate: "60Hz",
                connectivity: "WiFi, Bluetooth, 3x HDMI",
                special_features: [
                    "Vivid Picture Engine",
                    "Far-field Google Assistant",
                    "Adaptive Brightness"
                ]
            }
        },
        {
            id: 33,
            category: "Televisions",
            name: "OnePlus TV Y1S Pro",
            price: "₹25,999",
            images: [
                "https://m.media-amazon.com/images/I/41uKzj7qVWL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/71e43FnIkuL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/81Z3GRyjoRL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/61S5xAIUBPL._SX522_.jpg"
            ],
            description: "Premium design with 4K resolution, Gamma Engine, and seamless integration with OnePlus devices.",
            details: {
                size: "43-inch",
                resolution: "4K UHD",
                features: "Gamma Engine, Smart Manager",
                refreshRate: "60Hz",
                connectivity: "WiFi, Bluetooth, 2x HDMI",
                special_features: [
                    "Gamma Engine Enhancement",
                    "OnePlus Connect 2.0",
                    "Auto Low Latency Mode"
                ]
            }
        },
        {
            id: 34,
            category: "Televisions",
            name: "TCL 4K Android TV",
            price: "₹22,999",
            images: [
                "https://m.media-amazon.com/images/I/51KN3pElJcL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/61M2FnMI-rL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/812rce0HUQL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/61r8MeQpOZL._SX522_.jpg"
            ],
            description: "Android TV with Dolby Audio, bezel-less design, and smooth performance for streaming apps.",
            details: {
                size: "43-inch",
                resolution: "4K UHD",
                features: "Dolby Audio, Android TV",
                refreshRate: "60Hz",
                connectivity: "WiFi, Bluetooth, 3x HDMI",
                special_features: [
                    "Android TV 11",
                    "Micro Dimming",
                    "Dynamic Color Enhancement"
                ]
            }
        },
        {
            id: 35,
            category: "Televisions",
            name: "Redmi 4K Ultra HD TV",
            price: "₹23,999",
            images: [
                "https://m.media-amazon.com/images/I/41mrOMnZrWL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/41mrOMnZrWL._SY300_SX300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/81L4dBdaVjL._SX522_.jpg",
                "https://m.media-amazon.com/images/I/71dlybMJZzL._SX522_.jpg"
            ],
            description: "Feature-rich budget TV with Dolby Vision, vivid colors, and PatchWall interface.",
            details: {
                size: "43-inch",
                resolution: "4K UHD",
                features: "Dolby Vision, PatchWall, HDR",
                refreshRate: "60Hz",
                connectivity: "WiFi, 3x HDMI, USB",
                special_features: [
                    "PatchWall UI",
                    "Dolby Vision IQ",
                    "Vivid Color Engine"
                ]
            }
        }
    ]
}

]


export default Productdata;