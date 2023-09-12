exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 48245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MV: () => (/* reexport */ components_CTA),
  Ss: () => (/* reexport */ components_CardItem),
  $_: () => (/* reexport */ components_Footer),
  HC: () => (/* reexport */ components_ListItem),
  wp: () => (/* reexport */ components_Navbar)
});

// UNUSED EXPORTS: ComingSoon

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Menu.js
var Menu = __webpack_require__(43900);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(67671);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/data/menuData.ts
const menus = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About Us",
        link: "/about"
    },
    {
        id: 4,
        name: "Articles",
        link: "/articles"
    },
    {
        id: 5,
        name: "Programs",
        link: "/coming"
    }
];
const footers = [
    {
        id: 1,
        name: "Privacy Policy",
        link: "/"
    },
    {
        id: 2,
        name: "Terms & Conditions",
        link: "/about"
    },
    {
        id: 3,
        name: "Cookie Policy",
        link: ""
    }
];

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(40248);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(113);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/HomeRounded.js
var HomeRounded = __webpack_require__(92147);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/GroupsRounded.js
var GroupsRounded = __webpack_require__(6850);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LocalPhoneRounded.js
var LocalPhoneRounded = __webpack_require__(76903);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ImportContactsRounded.js
var ImportContactsRounded = __webpack_require__(61331);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AutoAwesomeRounded.js
var AutoAwesomeRounded = __webpack_require__(48170);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/staticData.ts
var staticData = __webpack_require__(35971);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Twitter.js
var Twitter = __webpack_require__(27370);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Instagram.js
var Instagram = __webpack_require__(99994);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/YouTube.js
var YouTube = __webpack_require__(47282);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Podcasts.js
var Podcasts = __webpack_require__(15197);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Audiotrack.js
var Audiotrack = __webpack_require__(85495);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx




















const Navbar = ({ active, isDetail })=>{
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const [isSelected, setIsSelected] = (0,react_.useState)(active);
    const [isContactOpen, setIsContactOpen] = (0,react_.useState)(false);
    const [isSendUsMessage, setIsSendUsMessage] = (0,react_.useState)(false);
    const [formData, setFormData] = (0,react_.useState)({
        email: "",
        message: ""
    });
    const handleInput = (e)=>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState)=>({
                ...prevState,
                [fieldName]: fieldValue
            }));
    };
    const handleSendMessage = async (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const message = e.target.message.value;
        try {
            const response = await axios/* default */.Z.post("https://resource.candidatecollegeind.com/api/contact-us", {
                email,
                message
            });
            if (response.status === 200) {
                const responseData = response.data;
                // console.log("Message sent successfully:", responseData);
                // Show success alert with timer
                sweetalert2_all_default().fire({
                    icon: "success",
                    title: "Message Sent",
                    text: responseData.message,
                    confirmButtonColor: "#FFDE59",
                    timer: 3000,
                    timerProgressBar: true
                });
                // Clear the email and message fields
                setFormData({
                    email: "",
                    message: ""
                });
            } else {
                console.error("Error sending message:", response.data.message);
                // Show error alert with timer
                sweetalert2_all_default().fire({
                    icon: "error",
                    title: "Message Failed",
                    text: "An error occurred while sending your message. Please try again.",
                    confirmButtonColor: "#FFDE59",
                    timer: 3000,
                    timerProgressBar: true
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            // Show error alert for general error with timer
            sweetalert2_all_default().fire({
                icon: "error",
                title: "Message Failed",
                text: "An error occurred while sending your message. Please try again.",
                confirmButtonColor: "#FFDE59",
                timer: 3000,
                timerProgressBar: true
            });
        }
    };
    const socials = [
        {
            id: 1,
            name: "Twitter",
            link: "https://twitter.com/CCollege_Ind",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Twitter/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 2,
            name: "Instagram",
            link: "https://www.instagram.com/candidate.college/",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Instagram/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 3,
            name: "Youtube",
            link: "https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(YouTube/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 4,
            name: "Spotify",
            link: "https://open.spotify.com/show/0xhjenJefepCIKH5UeVyiE?si=08402adcbd92430b",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Podcasts/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 4,
            name: "Tiktok",
            link: "https://www.tiktok.com/@candidatecollege",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Audiotrack/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        }
    ];
    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen);
    };
    const showPopUp = ()=>{
        setIsSelected("Contact Us");
        setIsOpen(false);
        setIsContactOpen(true);
    };
    const closePopUp = ()=>{
        setIsSelected(active);
        setIsOpen(false);
        setIsSendUsMessage(false);
        setIsContactOpen(false);
    };
    const SendMessageSection = ()=>{
        const [formData, setFormData] = (0,react_.useState)({
            email: "",
            message: ""
        });
        const handleInput = (e)=>{
            const fieldName = e.target.name;
            const fieldValue = e.target.value;
            setFormData((prevState)=>({
                    ...prevState,
                    [fieldName]: fieldValue
                }));
        };
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "flex flex-col gap-2 md:px-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                    id: "email",
                    name: "email",
                    autoComplete: "off",
                    type: "email",
                    placeholder: "Your Email",
                    className: "border border-gray rounded-2xl px-4 py-2 text-sm md:text-base text-primary placeholder:text-gray",
                    value: formData.email,
                    onChange: handleInput,
                    required: true
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                    id: "message",
                    name: "message",
                    autoComplete: "off",
                    placeholder: "Your Message",
                    className: "border border-gray rounded-2xl px-4 py-2 text-sm md:text-base text-primary placeholder:text-gray",
                    rows: 8,
                    value: formData.message,
                    onChange: handleInput,
                    required: true
                })
            ]
        });
    };
    const ContactUsSection = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
            className: "flex flex-row gap-10 items-center justify-center md:px-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                        className: "font-medium text-white text-base",
                        children: "Our Socials"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                        className: "flex flex-row gap-2",
                        children: socials.map((social, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                className: "text-4xl text-secondary font-normal hover:text-primary duration-700 transition-all",
                                href: social.link,
                                title: social.name,
                                about: social.name,
                                children: social.component
                            }, index))
                    })
                ]
            })
        });
    };
    const PopUpContact = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "w-full h-[150vh] absolute md:flex md:items-start md:justify-center top-0 bg-[rgba(0,0,0,0.5)]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col-gap-2 bg-white rounded-xl h-fit opacity-100 mx-5 mt-[10vh] relative md:w-[60%]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                        className: "text-2xl absolute top-4 right-5 text-primary cursor-pointer",
                        onClick: (e)=>closePopUp(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Close/* default */.Z, {
                            fontSize: "inherit",
                            color: "inherit"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "w-full h-full px-5 pt-10 pb-6 md:py-10 flex flex-col gap-9 -mt-1 md:px-10 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-2 w-full md:px-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                        className: "text-primary text-xs md:text-base font-medium uppercase",
                                        children: isSendUsMessage ? staticData/* sendUsMessageSectionOnLanding */.I4.subtitle : staticData/* contactUsSectionOnLanding */.F2.subtitle
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col gap-2 md:flex-row md:gap-20 md:items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                                className: "text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px]",
                                                children: isSendUsMessage ? staticData/* sendUsMessageSectionOnLanding */.I4.title : staticData/* contactUsSectionOnLanding */.F2.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                className: "text-gray text-sm lg:text-base md:w-[40%]",
                                                children: isSendUsMessage ? staticData/* sendUsMessageSectionOnLanding */.I4.description : staticData/* contactUsSectionOnLanding */.F2.description
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !isSendUsMessage ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(ContactUsSection, {}) : null,
                            !isSendUsMessage ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "https://wa.wizard.id/b28ccc",
                                        title: "Contact Us",
                                        about: "Contact Us",
                                        className: "bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        onClick: (e)=>setIsSendUsMessage(true),
                                        className: "bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4",
                                        children: "Send Us Message"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>handleSendMessage(e),
                                className: "flex flex-col gap-4",
                                autoComplete: "false",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(SendMessageSection, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col gap-4 md:w-full md:items-center md:justify-center md:mt-0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                                type: "submit",
                                                title: "Send Us Message",
                                                about: "Send Us Message",
                                                className: "bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4",
                                                children: "Send Message"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                onClick: (e)=>setIsSendUsMessage(false),
                                                className: "bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4",
                                                children: "Contact Us"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `w-full z-50 ${isDetail ? "bg-white shadow-lg" : "bg-primary"} fixed lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-b-border ${isContactOpen ? "lg:px-0" : "lg:px-0"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: `lg:mx-auto md:hidden lg:flex-1 flex flex-row items-center justify-between px-7 py-1 border-b border-b-border lg:border-none h-[10vh] md:h-fit`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                        href: "/",
                        title: "Candidate College Home",
                        about: "Candidate College Home",
                        className: "block cursor-pointer",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                            src: `/logo/logo-full-cc.png`,
                            width: 100,
                            height: 70,
                            alt: `Logo Candidate College`,
                            title: `Logo Candidate College`,
                            className: `block w-[150px] h-[100px] lg:h-[80px] object-contain cursor-pointer`,
                            loading: "lazy"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                        onClick: (e)=>toggleIsOpen(),
                        className: `block lg:hidden text-2xl ${isDetail ? "text-primary" : "text-white"} transition-all duration-800 cursor-pointer`,
                        children: isOpen ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(Close/* default */.Z, {
                            color: "inherit",
                            fontSize: "inherit"
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(Menu/* default */.Z, {
                            color: "inherit",
                            fontSize: "inherit"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "md:flex hidden max-w-5xl flex-row items-center justify-between mx-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "/",
                            title: "Candidate College Home",
                            about: "Candidate College Home",
                            className: "block cursor-pointer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                                src: `/logo/logo-full-cc.png`,
                                width: 100,
                                height: 70,
                                alt: `Logo Candidate College`,
                                title: `Logo Candidate College`,
                                className: `block w-[150px] h-[100px] lg:h-[80px] object-contain`,
                                loading: "lazy"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "hidden md:flex flex-row w-fit",
                            children: [
                                menus.map((menu, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: menu.link,
                                        about: menu.name,
                                        title: menu.name,
                                        className: `hover:bg-secondary hover:rounded-full px-5 py-2 duration-800 transition-all hover:text-primary ${menu.name == isSelected ? "bg-secondary text-primary rounded-full" : "bg-transparent"} ${isDetail ? "text-primary" : menu.name == isSelected ? "text-primary" : "text-white"}`,
                                        onClick: (e)=>setIsSelected(menu.name),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: `font-medium text-[15px] flex items-center justify-center`,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: menu.name
                                            })
                                        })
                                    }, index)),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: `hover:bg-secondary hover:rounded-full px-5 py-2 duration-800 transition-all hover:text-primary ${"Contact Us" == isSelected ? "bg-secondary text-primary rounded-full" : "bg-transparent"} cursor-pointer ${isDetail ? "text-primary" : "text-white"}`,
                                    onClick: (e)=>showPopUp(),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                        className: `font-medium text-[15px] flex items-center justify-center`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            children: "Contact Us"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            !isOpen ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "flex flex-row w-full absolute lg:hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("article", {
                        className: "flex-1"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        className: "flex-1 pr-7 py-4 flex flex-col gap-3",
                        children: [
                            menus.map((menu, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                    href: menu.link,
                                    about: menu.name,
                                    title: menu.name,
                                    className: `bg-secondary ${isSelected == menu.name ? "w-full px-5 py-3" : "w-fit flex items-center justify-center px-4 py-3 self-end"} rounded-full text-primary duration-800 transition-all`,
                                    onClick: (e)=>setIsSelected(menu.name),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: `font-medium text-base flex items-center ${isSelected == menu.name ? "gap-3" : "gap-0"} justify-center`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: isSelected == menu.name ? menu.name : null
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                className: "text-primary text-2xl pb-[0.15rem]",
                                                children: menu.name == "Home" ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(HomeRounded/* default */.Z, {
                                                    color: "inherit",
                                                    fontSize: "inherit"
                                                }) : menu.name == "About Us" ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(GroupsRounded/* default */.Z, {
                                                    color: "inherit",
                                                    fontSize: "inherit"
                                                }) : menu.name == "Contact Us" ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(LocalPhoneRounded/* default */.Z, {
                                                    color: "inherit",
                                                    fontSize: "inherit"
                                                }) : menu.name == "Articles" ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(ImportContactsRounded/* default */.Z, {
                                                    color: "inherit",
                                                    fontSize: "inherit"
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(AutoAwesomeRounded/* default */.Z, {
                                                    color: "inherit",
                                                    fontSize: "inherit"
                                                })
                                            })
                                        ]
                                    })
                                }, index)),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: `bg-secondary ${isSelected == "Contact Us" ? "w-full px-5 py-3" : "w-fit flex items-center justify-center px-4 py-3 self-end"} rounded-full text-primary duration-800 transition-all`,
                                onClick: (e)=>showPopUp(),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: `font-medium text-base flex items-center ${isSelected == "Contact Us" ? "gap-3" : "gap-0"} justify-center`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            children: isSelected == "Contact Us" ? "Contact Us" : null
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            className: "text-primary text-2xl",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(LocalPhoneRounded/* default */.Z, {
                                                color: "inherit",
                                                fontSize: "inherit"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            isContactOpen ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(PopUpContact, {}) : null
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./src/data/articleData.ts
var articleData = __webpack_require__(89008);
;// CONCATENATED MODULE: ./src/data/eventData.ts
const latestEvents = [
    {
        id: 1,
        name: "Excersise UTBK 2024",
        link: "/"
    },
    {
        id: 2,
        name: "TOEFL Preperation to Be Best",
        link: "/"
    },
    {
        id: 3,
        name: "Get to Know Candidate College",
        link: "/"
    },
    {
        id: 4,
        name: "Gema Akbar Candidate College",
        link: "/"
    }
];
const categories = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Edu Fair"
    },
    {
        id: 3,
        name: "Bootcamp"
    },
    {
        id: 4,
        name: "SIM-C BT"
    },
    {
        id: 5,
        name: "GTKCC"
    },
    {
        id: 6,
        name: "Webinar"
    }
];

// EXTERNAL MODULE: ./src/components/icons/styles/custom.css
var custom = __webpack_require__(66953);
;// CONCATENATED MODULE: ./src/components/icons/SpotifyIcon.tsx



const SpotifyIcon = ({ size, color })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: `0 0 24 24`,
        className: "spotify-svg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
            d: "M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z",
            fill: color
        })
    });
};
/* harmony default export */ const icons_SpotifyIcon = (SpotifyIcon);

;// CONCATENATED MODULE: ./src/components/icons/TiktokIcon.tsx



const TiktokIcon = ({ size, color })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "spotify-svg",
        width: size,
        height: size,
        viewBox: `0 0 24 24`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
            d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
            fill: color
        })
    });
};
/* harmony default export */ const icons_TiktokIcon = (TiktokIcon);

;// CONCATENATED MODULE: ./src/components/Footer.tsx












const Footer = ()=>{
    const socials = [
        {
            id: 1,
            name: "Twitter",
            link: "https://twitter.com/CCollege_Ind",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Twitter/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 2,
            name: "Instagram",
            link: "https://www.instagram.com/candidate.college/",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Instagram/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 3,
            name: "Youtube",
            link: "https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(YouTube/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 4,
            name: "Spotify",
            link: "https://open.spotify.com/show/0xhjenJefepCIKH5UeVyiE?si=08402adcbd92430b",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(icons_SpotifyIcon, {
                color: "#FFDE59",
                size: "30"
            })
        },
        {
            id: 5,
            name: "Tiktok",
            link: "https://www.tiktok.com/@candidatecollege",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(icons_TiktokIcon, {
                size: "30",
                color: "#FFDE59"
            })
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "w-full h-full px-7 md:px-0 md:mx-auto md:max-w-5xl py-6 bg-primary flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: `w-full flex flex-col`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                        href: "/",
                        title: "Candidate College Home",
                        about: "Candidate College Home",
                        className: "block cursor-pointer",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                            src: `/logo/logo-full-cc.png`,
                            width: 100,
                            height: 50,
                            alt: `Logo Candidate College`,
                            title: `Logo Candidate College`,
                            className: `block w-[150px] h-[100px] object-contain`,
                            loading: "lazy"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                        className: "text-gray text-sm -mt-3",
                        children: "Education Platform that works to facilitate students in Indonesia."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "flex flex-row gap-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                className: "font-medium text-white text-base",
                                                children: "Navigation"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                                className: "flex flex-col gap-2",
                                                children: menus.map((menu, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        className: "text-sm text-gray font-normal hover:text-white duration-700 transition-all",
                                                        href: menu.link,
                                                        title: menu.name,
                                                        about: menu.name,
                                                        children: menu.name
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                className: "font-medium text-white text-base",
                                                children: "Latest Events"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                                className: "flex flex-col gap-2",
                                                children: latestEvents.map((event, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        className: "text-sm text-gray font-normal hover:text-white duration-700 transition-all",
                                                        href: event.link,
                                                        title: event.name,
                                                        about: event.name,
                                                        children: event.name
                                                    }, index))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                                className: "hidden lg:ml-10 lg:flex flex-row gap-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "font-medium text-white text-base",
                                            children: "Articles"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                            className: "flex flex-col gap-2",
                                            children: articleData/* articles */.Dq.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    className: "text-sm text-gray font-normal hover:text-white duration-700 transition-all",
                                                    href: article.link,
                                                    title: article.title,
                                                    about: article.title,
                                                    children: article.title
                                                }, index))
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                        className: "hidden lg:ml-10 lg:flex flex-row gap-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                    className: "font-medium text-white text-base",
                                    children: "Our Socials"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                    className: "flex flex-row gap-2 items-center",
                                    children: socials.map((social, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            className: "text-3xl text-secondary font-normal hover:text-white duration-700 transition-all",
                                            href: social.link,
                                            title: social.name,
                                            about: social.name,
                                            children: social.component
                                        }, index))
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "flex lg:hidden flex-row gap-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: "font-medium text-white text-base",
                            children: "Articles"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                            className: "flex flex-col gap-2",
                            children: articleData/* articles */.Dq.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                    className: "text-sm text-gray font-normal hover:text-white duration-700 transition-all",
                                    href: article.link,
                                    title: article.title,
                                    about: article.title,
                                    children: article.title
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "flex lg:hidden flex-row gap-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: "font-medium text-white text-base",
                            children: "Our Socials"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                            className: "flex flex-row gap-2 items-center",
                            children: socials.map((social, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                    className: "text-3xl text-secondary font-normal hover:text-white duration-700 transition-all",
                                    href: social.link,
                                    title: social.name,
                                    about: social.name,
                                    children: social.component
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("hr", {
                className: "bg-gray text-gray"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "flex lg:hidden flex-row gap-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                        className: "flex flex-col gap-3",
                        children: footers.map((footer, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                className: "font-medium text-white text-base duration-700 transition-all",
                                href: footer.link,
                                title: footer.name,
                                about: footer.name,
                                children: footer.name
                            }, index))
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                className: "text-gray text-sm mt-5 lg:mt-0",
                children: "\xa9 Candidate College 2023."
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AutoAwesome.js
var AutoAwesome = __webpack_require__(3261);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ShoppingBagRounded.js
var ShoppingBagRounded = __webpack_require__(90508);
// EXTERNAL MODULE: ./src/styles/cta.css
var cta = __webpack_require__(27859);
;// CONCATENATED MODULE: ./src/components/CTA.tsx











const CTA = ()=>{
    const [isShowSocials, setIsShowSocials] = (0,react_.useState)(false);
    const toggleIsShowSocials = ()=>{
        setIsShowSocials(!isShowSocials);
    };
    const socials = [
        {
            id: 1,
            name: "Twitter",
            link: "https://twitter.com/CCollege_Ind",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Twitter/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 2,
            name: "Instagram",
            link: "https://www.instagram.com/candidate.college/",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Instagram/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 3,
            name: "Youtube",
            link: "https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(YouTube/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 4,
            name: "Spotify",
            link: "https://open.spotify.com/show/0xhjenJefepCIKH5UeVyiE?si=08402adcbd92430b",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Podcasts/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        },
        {
            id: 5,
            name: "Tiktok",
            link: "https://www.tiktok.com/@candidatecollege",
            component: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Audiotrack/* default */.Z, {
                color: "inherit",
                fontSize: "inherit"
            })
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col gap-4 fixed bottom-8 left-5 floating-container z-50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex-col gap-4 ${isShowSocials ? "flex show" : "hidden"} element-container`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                        href: "/coming",
                        about: "Merchandise Market",
                        title: "Merchandise Market",
                        className: `bg-secondary w-fit flex items-center justify-center px-4 py-4 self-end rounded-full text-primary hover:text-white duration-800 transition-all cursor-pointer`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: `font-medium text-base flex items-center justify-center`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                className: "text-primary hover:text-white text-2xl leading-[0.5rem]",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ShoppingBagRounded/* default */.Z, {
                                    fontSize: "inherit",
                                    color: "inherit"
                                })
                            })
                        })
                    }),
                    socials.map((social, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: social.link,
                            about: social.name,
                            title: social.name,
                            className: `bg-secondary w-fit flex items-center justify-center px-4 py-4 self-end rounded-full text-primary hover:text-white duration-800 transition-all cursor-pointer float-element`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                className: `font-medium text-base flex items-center justify-center`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                    className: "text-primary hover:text-white text-2xl leading-[0.5rem]",
                                    children: social.component
                                })
                            })
                        }, index))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                onClick: (e)=>toggleIsShowSocials(),
                className: `bg-secondary w-fit flex items-center justify-center px-4 py-4 self-end rounded-full text-primary duration-800 transition-all cursor-pointer floating-button`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                    className: `font-medium text-base flex items-center justify-center`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                        className: "text-primary text-2xl leading-[0.9rem]",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(AutoAwesome/* default */.Z, {
                            fontSize: "inherit",
                            color: "inherit"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_CTA = (CTA);

;// CONCATENATED MODULE: ./src/components/ListItem.tsx


const ListItem = ({ data, isLoading, onClick, active })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: `rounded-full bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse px-2 md:px-5 py-3 text-transparent text-center cursor-pointer mt-6 hover:bg-primary hover:text-white md:mt-0 w-full duration-700 transition-all h-fit`,
            children: "LOADING ..."
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            onClick: onClick,
            className: `${data.name == active ? "bg-primary text-white" : "bg-secondary text-primary"} font-medium text-sm md:text-base rounded-full px-2 md:px-5 py-3 text-center cursor-pointer mt-6 hover:bg-primary hover:text-white md:mt-0 w-full duration-700 transition-all h-fit`,
            children: data.name
        })
    });
};
/* harmony default export */ const components_ListItem = (ListItem);

// EXTERNAL MODULE: ./src/styles/swiper-article.css
var swiper_article = __webpack_require__(877);
;// CONCATENATED MODULE: ./src/components/CardItem.tsx





const CardItem = ({ data, type, isLoading })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "rounded-lg w-[22rem] h-[22rem] bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-2 pt-3 pb-5 relative px-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-1 w-full",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "/articles",
                            title: "Read More",
                            about: "Read More",
                            className: "bg-secondary text-transparent font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5 bg-gradient-to-r from-yellow-200 to-yellow-300 animate-pulse",
                            children: "Read More"
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer w-[22rem]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                    src: `https://resource.candidatecollegeind.com/storage/${data.cover}`,
                    alt: type == "Article" ? data.title : data.name,
                    title: type == "Article" ? data.title : data.name,
                    className: "rounded-lg w-[22rem] h-[22rem] object-cover",
                    width: 0,
                    height: 0
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-2 pt-3 pb-5 relative px-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                            className: "font-semibold text-base text-primary",
                            children: type == "Article" ? data.title.length > 33 ? data.title.substring(0, 33) + "..." : data.title : data.name.length > 33 ? data.name.substring(0, 33) + "..." : data.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: "font-normal text-sm text-gray",
                            children: data.snippets.substring(0, 150) + "..."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: `/${type == "Article" ? "articles" : "events"}/${data.slug}`,
                            title: "Read More",
                            about: "Read More",
                            className: "bg-secondary text-primary font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5",
                            children: "Read More"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_CardItem = (CardItem);

;// CONCATENATED MODULE: ./src/components/ComingSoon.tsx




const ComingSoon = ()=>{
    return /*#__PURE__*/ _jsxs("section", {
        className: "flex flex-col w-full h-full lg:pt-[140px] mx-auto md:pt-[165px] pt-[185px] px-5 py-8 md:max-w-6xl md:mx-auto justify-center md:items-center relative md:h-3/6 lg:h-screen",
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: "/decoration/coming.png",
                width: 0,
                height: 0,
                className: "lg: w-[600px] mx-auto",
                alt: "Coming Soon Decoration",
                title: "Coming Soon Decoration"
            }),
            /*#__PURE__*/ _jsx("h1", {
                className: "font-semibold text-primary text-center lg:text-[40px] p-1 md:text-[30px] xl:w-[70%] md:w-[90%] md:text-center leading-[50%]",
                children: "Coming Soon"
            }),
            /*#__PURE__*/ _jsxs("p", {
                className: "text-gray text-sm text-center leading-2 md:pt-4 pt-2 md:text-center lg:text-base md:w-[70%]",
                children: [
                    "This still developing Candidaters! ",
                    /*#__PURE__*/ _jsx("br", {}),
                    "Stay tuned"
                ]
            }),
            /*#__PURE__*/ _jsx(Link, {
                href: "/home",
                title: "Back to Home",
                about: "Back to Home",
                className: "bg-secondary text-primary font-medium self-center text-center text-base rounded-full px-20 py-2 text-center justify-center md:self-center self-start cursor-pointer mt-2 md:mt-[11px]",
                children: "Back to Home"
            })
        ]
    });
};
/* harmony default export */ const components_ComingSoon = ((/* unused pure expression or super */ null && (ComingSoon)));

;// CONCATENATED MODULE: ./src/components/index.ts









/***/ }),

/***/ 89008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dq: () => (/* binding */ articles),
/* harmony export */   NE: () => (/* binding */ articlesOnPage),
/* harmony export */   RB: () => (/* binding */ articlesOnLanding)
/* harmony export */ });
/* unused harmony export categories */
const articles = [
    {
        id: 1,
        title: "Untuk Kamu Yang Sering Mencari Validasi Dari Orang Lain",
        link: "/"
    },
    {
        id: 2,
        title: "Krisis Moral di Kalangan Gen Z",
        link: "/"
    },
    {
        id: 3,
        title: "Kenapa Aku Kehilangan Motivasi Dalam Mengerjakan Sesuatu Yaa?",
        link: "/"
    }
];
const categories = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Education"
    },
    {
        id: 3,
        name: "Technology"
    },
    {
        id: 4,
        name: "Students"
    },
    {
        id: 5,
        name: "Gen Z"
    },
    {
        id: 6,
        name: "Nowdays"
    }
];
const articlesOnLanding = [
    {
        id: 1,
        cover: "https://i.postimg.cc/PxvqjrP6/feeds.png",
        title: "Inner Critic, Baikkah Untuk Kita?",
        uploaded: "28 May 2023",
        snippets: "Pendidikan formal adalah pendidikan yang sistematis, terstruktur, berjenjang, mulai dari sekolah dasar sampai pendidikan tinggi dan pendidikan sejenis lainnya, yang meliputi kegiatan studi akademik dan umum, program khusus, dan pelatihan profesi, yang dilakukan secara terus menerus."
    },
    {
        id: 2,
        cover: "https://i.postimg.cc/PxvqjrP6/feeds-2.png",
        title: "Zona Nyaman: Pertahankan atau Tinggalkan?",
        uploaded: "31 June 2023",
        snippets: "Pendidikan formal adalah pendidikan yang sistematis, terstruktur, berjenjang, mulai dari sekolah dasar sampai pendidikan tinggi dan pendidikan sejenis lainnya, yang meliputi kegiatan studi akademik dan umum, program khusus, dan pelatihan profesi, yang dilakukan secara terus menerus."
    },
    {
        id: 3,
        cover: "https://i.postimg.cc/PxvqjrP6/feeds-3.png",
        title: "Mahasiswa Sebagai Agent of Change",
        uploaded: "1 July 2023",
        snippets: "Pendidikan formal adalah pendidikan yang sistematis, terstruktur, berjenjang, mulai dari sekolah dasar sampai pendidikan tinggi dan pendidikan sejenis lainnya, yang meliputi kegiatan studi akademik dan umum, program khusus, dan pelatihan profesi, yang dilakukan secara terus menerus."
    },
    {
        id: 4,
        cover: "https://i.postimg.cc/PxvqjrP6/feeds.png",
        title: "Mahasiswa Sebagai Agent of Change",
        uploaded: "1 July 2023",
        snippets: "Pendidikan formal adalah pendidikan yang sistematis, terstruktur, berjenjang, mulai dari sekolah dasar sampai pendidikan tinggi dan pendidikan sejenis lainnya, yang meliputi kegiatan studi akademik dan umum, program khusus, dan pelatihan profesi, yang dilakukan secara terus menerus."
    },
    {
        id: 5,
        cover: "https://i.postimg.cc/PxvqjrP6/feeds.png",
        title: "Mahasiswa Sebagai Agent of Change",
        uploaded: "1 July 2023",
        snippets: "Pendidikan formal adalah pendidikan yang sistematis, terstruktur, berjenjang, mulai dari sekolah dasar sampai pendidikan tinggi dan pendidikan sejenis lainnya, yang meliputi kegiatan studi akademik dan umum, program khusus, dan pelatihan profesi, yang dilakukan secara terus menerus."
    }
];
const articlesOnPage = [
    {
        id: 1,
        title: "Introducing Meteor, Our Open Source Metadata Collection Framework",
        coverLandscape: "https://blog.gojek.io/content/images/2022/06/Blog-Banner_Meteor-2.jpg",
        coverPotrait: "",
        snippets: "Meteor is an easy-to-use, plugin-driven framework to extract data from different sources and sink to any data catalog.",
        publishedAt: "4 May 2022",
        author: "Farhan",
        duration: 5
    },
    {
        id: 2,
        title: "Introducing Meteor, Our Open Source Metadata Collection Framework",
        coverLandscape: "https://blog.gojek.io/content/images/2022/10/Alex-Cuthbert-BTYR-Blog-1.jpg",
        coverPotrait: "",
        snippets: "Meteor is an easy-to-use, plugin-driven framework to extract data from different sources and sink to any data catalog.",
        publishedAt: "4 May 2022",
        author: "Farhan",
        duration: 5
    },
    {
        id: 3,
        title: "Introducing Meteor, Our Open Source Metadata Collection Framework",
        coverLandscape: "https://blog.gojek.io/content/images/2021/11/Blog-Banner_Cartography_281021_SB-2.jpg",
        coverPotrait: "",
        snippets: "Meteor is an easy-to-use, plugin-driven framework to extract data from different sources and sink to any data catalog.",
        publishedAt: "4 May 2022",
        author: "Farhan",
        duration: 5
    },
    {
        id: 4,
        title: "Introducing Meteor, Our Open Source Metadata Collection Framework",
        coverLandscape: "https://blog.gojek.io/content/images/2021/06/Cast-Blog_120321_SB-2.jpg",
        coverPotrait: "",
        snippets: "Meteor is an easy-to-use, plugin-driven framework to extract data from different sources and sink to any data catalog.",
        publishedAt: "4 May 2022",
        author: "Farhan",
        duration: 5
    },
    {
        id: 5,
        title: "Introducing Meteor, Our Open Source Metadata Collection Framework",
        coverLandscape: "https://blog.gojek.io/content/images/2021/06/Cast-Blog_120321_SB-2.jpg",
        coverPotrait: "",
        snippets: "Meteor is an easy-to-use, plugin-driven framework to extract data from different sources and sink to any data catalog.",
        publishedAt: "4 May 2022",
        author: "Farhan",
        duration: 5
    }
];


/***/ }),

/***/ 35971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F2: () => (/* binding */ contactUsSectionOnLanding),
/* harmony export */   I4: () => (/* binding */ sendUsMessageSectionOnLanding),
/* harmony export */   VO: () => (/* binding */ values),
/* harmony export */   sq: () => (/* binding */ valueSectionOnLanding),
/* harmony export */   ys: () => (/* binding */ articleSectionOnLanding)
/* harmony export */ });
/* unused harmony exports eventSectionOnLanding, aboutCandidateCollege, visionCandidateCollege, misionCandidateCollege, divisions, testimonials */
const valueSectionOnLanding = {
    subtitle: "Who Are We",
    title: "Edu-Platform for Indonesian Students",
    description: "Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system."
};
const values = [
    {
        id: 1,
        desc: "Help student achieve their educational goals",
        image: "value-1.png"
    },
    {
        id: 2,
        desc: "Share inspirational and helpfull events",
        image: "value-2.png"
    },
    {
        id: 3,
        desc: "Spread knowledge through articles",
        image: "value-3.png"
    }
];
const articleSectionOnLanding = {
    subtitle: "Our Articles",
    title: "With Insightful and Actual Topic",
    description: "Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system."
};
const eventSectionOnLanding = {
    subtitle: "Our Events",
    title: "With Insightful and Actual Topic",
    description: "Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system."
};
const contactUsSectionOnLanding = {
    subtitle: "Contact Us",
    title: "Interested To Cooperate With Us?",
    description: "Contact and visit our social media if you want to collaborate in any form with Candidate College."
};
const sendUsMessageSectionOnLanding = {
    subtitle: "Send Message",
    title: "Interested To Cooperate With Us?",
    description: "Send messages, suggestions, and criticisms to us and wait for a reply in the email listed, thank you!"
};
const aboutCandidateCollege = "Candidate College is an education platform organization that works to facilitate students in Indonesia at home and abroad to achieve a quality education system";
const visionCandidateCollege = "Vision of Candidate College is to achieve quality equally for all Indonesian students at home and abroad";
const misionCandidateCollege = "Mission of Candidate College is to achieve quality equally for all Indonesian students at home and abroad";
const divisions = (/* unused pure expression or super */ null && ([
    "Social Media Specialist",
    "Graphic Design",
    "Content Writer",
    "Content Creator",
    "Podcast",
    "Business Development",
    "Web Development",
    "BA Supervisor",
    "Research & Development",
    "People & Culture",
    "Talent Engagement",
    "Performance Management",
    "Treasurer",
    "Event Organizer",
    "Secretary",
    "Communication & CM",
    "Public Relation"
]));
const testimonials = [
    {
        id: 1,
        name: "Dwi Putri Haryantari",
        status: "Head of Division Treasurer",
        testimonial: "Awalnya kaget ya dipercaya buat jadi HOD Treasurer di Candidate College dari batch 3 kemudian lanjut ke batch 4. Seneng banget bisa gabung ke CC karena tentunya banyak pengalaman dan temen-temen baru yang aku dapetin. Even kita kerjanya profesional, tapi kalau ngobrol tetep santai banget kayak temen. CC juga jadi tempat aku belajar banyak hal baru dan improved myself a lot. Intinya sih ga nyesel udah gabung ke CC selama 2 periode ini."
    },
    {
        id: 2,
        name: "Fara Berliana",
        status: "Head of Division Talent Engagement",
        testimonial: "So happyyy rasanya bisa berproses di Candidate College ini, ga nyangka juga bakal bertahan di Candidate College selama hampir 1 tahun. Ga bisa dideskripsiin gimana rasanya bisa jadi bagian dari Candidate College yang culturenya gilaaakkk seru banget!! Apalagi selalu ketemu orang-orang yang sefrekuensi dan bisa sharing antar divisi lain yang tentunya bisa dapet insight baru. And i'm so luckyy bisa ketemu teman2 TE yang superr duperrr kompak."
    },
    {
        id: 3,
        name: "Frederick Ronaldo",
        status: "Head of Division Social Media Specialist",
        testimonial: "awalnya b aja, karna masih ngerasa hah apaan sih, terus kya kok ga ngerangkul semua, kok kya yang deket” aja sih, ternyata itu cuma kya valuation yg sedikit salah dari aku ke kalian wahai cc, ya mungkin karna kita jg baru dipertemukan ya. at least, semua asik, walaupun ya aku kdg molor, mon maap aku magang+kegiatan kampus, tp kalian ttp supportive, masih ngasih eval yg jg aku butuhin, dan masih byk healingnya ya bisa di blg. jujurly, even aku cape, kalo kalian lagi ribut di grup becanda” aku seneng, pertahanin terus ya cc, dan aku harap bisa wider lagi ngerangkulnya, semangat!"
    },
    {
        id: 4,
        name: "Angelina Christy",
        status: "Head of Division Secretary",
        testimonial: "Seneng banget diberi kesempatan untuk masuk menjadi bagian keluarga Candidate College batch 4 ini khususnya di Secretary, karena banyak banget hal baru yang aku pelajari disini, seperti mengatur jalannya pembuatan seluruh berkas kesekretariatan dari awal hingga didistribusikan dengan tepat dan tentunya bersama dengan teman-teman Secretary lainnya yang super duper solid dan gercep"
    },
    {
        id: 5,
        name: "Lydia Natalia",
        status: "Head of Division Public Relation",
        testimonial: "Menjadi bagian dari Candidate College selama kurang lebih sembilan bulan membuat aku memiliki banyak pengetahuan baru. Aku dapat berkembang selama berproses, mulai dari staff hingga ditawarkan menjadi Head di divisi Public Relation. Bersyukur juga bisa menjadi bagian dari CC, karena CC organisasi yang sangat terstruktur, bisa mengenal bahkan akrab dengan teman di luar kampus, sikap kekeluargaannya, dan anggota-anggota yang ceria luar biasa. Aku juga berterima kasih kepada CC karna sudah menyediakan wadah untuk aku, teman-teman lainnya untuk berproses dan berkembang"
    },
    {
        id: 6,
        name: "Said Nur Octavianto",
        status: "Head of Division Web Development",
        testimonial: "Seru banget bisa gabung dan jadi keluarga besar di Candidate College. Disini aku dapet banyak pengalaman dan pemahaman baru sebagai Head of Division, terkhusus di Divisi Web Development. Leadership, manajemen waktu, dan berbagai kemampuan lain juga berkembang selama aku di Candidate College."
    },
    {
        id: 7,
        name: "Odyssey Nanlohy",
        status: "Head of Division Podcast",
        testimonial: "Jujur seneng banget bisa join di CC, society nya humble dan proker kerjanya terstruktur dan di CC aku jadi belajar banyak hal baru tidak hanya dari divisi aku yang sekarang melainkan dari divisi lain juga. Sistem kerja CC yang lumayan easy to do dan bisa banget WFA. Jadi sudah siapkah ambil bagian di CC, SBL SBL seru banget lohh..."
    },
    {
        id: 8,
        name: "Prayogi Setyo Darminto",
        status: "Head of Division People & Culture",
        testimonial: "Selama berproses di People & Culture Candidate College Batch 4 ini, saya diberi kesempatan menjadi HoD yang kritis & solutif dalam setiap kendala yang ada. Saya sangat senang & bersyukur memiliki staf PnC yang adaptif serta memiliki inisiatif tinggi hingga membuat saya bisa berkembang lebih jauh, mulai dari memimpin rapat, memberikan masukan, timeline & arahan secara spesifik kepada staf PnC, serta memperhatikan kondisi internal untuk selalu konsisten dalam setiap pekerjaan yang dijalankan."
    },
    {
        id: 9,
        name: "Shafa Callista Raihana Arif",
        status: "Head of Division Graphic Design",
        testimonial: "Bersyukur banget dan masih gak nyangka aku dikasih kesempatan untuk bergabung di Candidate College dan dipercaya sebagai Head of Graphic Design. Di sini aku dapet banyak banget pengalaman bittersweet baru yang pastinya bisa bikin diri aku jauh lebih baik lagi. Senang juga dengan lingkungan organisasinya yang super friendly, aku jadi punya banyak teman baru yg super asik dari seluruh Indonesia. Thank you so much, CC!"
    },
    {
        id: 10,
        name: "Yemima Astrid",
        status: "Head of Division Event Organizer",
        testimonial: "Overall bener-bener nyaman sama environment nya, walaupun adaptasi awal-awal tu rasanya mixed feelings, tapi satisfied banget sama GM, HoD lain and bu ketua. Banyak yang bisa dipelajari sebagai HoD dan juga sebagai anggota, susah seneng pasti dirangkul banget dan pastinya ga pernah ngerasa ditinggal sendiri-sendiri di sini."
    },
    {
        id: 11,
        name: "Rizka Ramadhanti",
        status: "Head of Division Content Writer",
        testimonial: "Satu kata yang dari gue buat CC. Cara kerjanya, lingkungan pertemanan, bahkan hal hal yang tadinya gue engga tau. Ketemu temen-temen yang ternyata satu frekuensi itu nilai plus banget sih. Pokoknya, it’s very worthy to join Candidate College!"
    },
    {
        id: 12,
        name: "Riska Stephanie",
        status: "Head of Division Content Creator",
        testimonial: "Omegat jujurly seneng banget bisa menjadi bagian di CC ini, banyak sekali hal yang aku dapat dari bergabungnya aku disini, dari awalnya aku seorang staff dan sekarang dapat kepercayaan menjadi Head of Division perubahan yang sangat signifikan buat hidup aku. Aku bisa survive banyak hal disini, selain itu lingkungan kerja yang ada juga sangat membantu dan support aku buat menyelesaikan setiap pekerjaan. And aku bangga banget bisa kenal sama orang-orang di dalam sini dan bahkan kerja bareng. Pokoknya asikuy deh!"
    },
    {
        id: 13,
        name: "Jocelyn Cynara",
        status: "Head of Division Business Development",
        testimonial: "Jujur ga nyangka bisa dapet kesempatan jadi head of business development, dimana challenge banget bagi aku yang belum terlalu banyak pengalaman di bidang ini. Tapi berkat dukungan suportif dari panitia-panitia lain, proker divisi ini berhasil dijalankan dengan baik. Dari awal yang ragu-ragu takut, aku jadi belajar banyak banget di volunteer ini, aku jadi tahu apa yang diperlukan untuk kolaborasi dengan pihak eksternal, bagaimana caranya mencari revenue untuk organisasi CC. Meskipun jatuh-bangun buat nyiapin proker, tapi disini semuanya saling membantu sama yang lain jadi aku merasa di lingkungan yang suportif banget."
    },
    {
        id: 14,
        name: "Angeline Novena Tricia",
        status: "Head of Division Brand Ambassador Supervisor",
        testimonial: "Di CC bisa belajar banyak hal yang belum pernah aku pelajari sebelumnya. Senang juga karena disini bisa bertemu dengan staf yang dapat diajak bekerja sama dengan baik. Lingkungan kerja nya pun juga terasa kekeluargaannya."
    }
];


/***/ }),

/***/ 66953:
/***/ (() => {



/***/ }),

/***/ 27859:
/***/ (() => {



/***/ }),

/***/ 877:
/***/ (() => {



/***/ })

};
;