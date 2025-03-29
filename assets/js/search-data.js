// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "Bio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "The following is a complete list of my publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Some recent talks about my research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Material for courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-professional-services",
          title: "Professional services",
          description: "Some I+D projects I&#39;ve worked on...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/consulting/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Software projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My main contributions in GitHub...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "consulting-consulting-for-numetra-inc-california-usa-on-designing-a-new-internet-transport-protocol-suitable-for-video-transmission",
          title: 'Consulting for Numetra Inc. (California, USA) on designing a new Internet Transport protocol...',
          description: "TCP optimization",
          section: "Consulting",},{id: "consulting-worked-with-plan-ceibal-an-initiative-to-bring-every-child-its-own-computer-with-internet-access-i-was-in-charge-of-designing-the-infrastructure-monitoring-system-and-developing-performance-metrics",
          title: 'Worked with Plan Ceibal, an initiative to bring every child its own computer...',
          description: "Wireless networks optimization",
          section: "Consulting",},{id: "consulting-worked-with-csi-ingenieros-in-a-joint-project-funded-by-anii-on-controlling-the-battery-management-system-in-a-combined-solar-battery-thermal-off-grid-deployment-in-cerros-de-vera-uruguay",
          title: 'Worked with CSI Ingenieros in a joint project funded by ANII on controlling...',
          description: "Solar battery optimization",
          section: "Consulting",},{id: "consulting-worked-on-a-project-funded-by-anii-the-national-electrical-utility-ute-and-the-national-under-secretary-of-energy-on-optimizing-the-placement-of-electrical-vehicle-charging-stations",
          title: 'Worked on a project funded by ANII, the national electrical utility UTE, and...',
          description: "EV Optimization",
          section: "Consulting",},{id: "consulting-worked-together-with-the-local-energy-utility-ute-under-sponsorship-of-the-iadb-bank-on-the-implementation-of-a-software-and-developing-new-algorithms-to-compute-the-optimal-power-flow-problem-in-the-distribution-network-the-software-is-now-ready-and-being-used-in-ute",
          title: 'Worked together with the local energy utility UTE under sponsorship of the IADB...',
          description: "Distribution network optimization",
          section: "Consulting",},{id: "consulting-consulting-for-newlab-llc-brooklyn-usa-and-montevideo-uruguay-on-optimizing-the-electrical-vehicle-charging-of-mercado-libre-south-american-parking-lot-charging-stations-for-delivery-vehicles",
          title: 'Consulting for NewLab LLC (Brooklyn, USA and Montevideo, Uruguay) on optimizing the electrical...',
          description: "EV Logistics optimization",
          section: "Consulting",},{id: "consulting-consulting-for-iadb-on-shaping-public-policy-for-ai-infrastructure-in-uruguay",
          title: 'Consulting for IADB on shaping public policy for AI Infrastructure in Uruguay.',
          description: "Consulting",
          section: "Consulting",},{id: "news-our-paper-on-minimal-variance-exact-scheduling-with-yorie-nakahira-and-adam-wierman-just-got-accepted-into-informs-operations-research",
          title: 'Our paper on Minimal Variance Exact Scheduling with Yorie Nakahira and Adam Wierman...',
          description: "",
          section: "News",},{id: "news-our-paper-on-covid-delay-and-saturation-models-just-got-accepted-into-siam-journal-on-control-and-optimization",
          title: 'Our paper on COVID delay and saturation models just got accepted into SIAM...',
          description: "",
          section: "News",},{id: "news-check-out-the-new-video-on-our-ev-charging-project-in-spanish",
          title: 'Check out the new video on our EV charging project (in Spanish)!',
          description: "",
          section: "News",},{id: "news-our-paper-on-managing-phase-imbalance-on-ev-charging-systems-just-got-accepted-into-acm-e-energy-2022",
          title: 'Our paper on managing phase imbalance on EV charging systems just got accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-impact-of-mobility-on-covid-infections-just-got-published-in-scientific-reports-nature",
          title: 'Our paper on the impact of mobility on COVID infections just got published...',
          description: "",
          section: "News",},{id: "news-our-paper-on-spatial-infrastructure-optimization-for-ev-charging-stations-just-got-accepted-into-the-2022-ieee-conference-on-decision-and-control",
          title: 'Our paper on spatial infrastructure optimization for EV charging stations just got accepted...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-talk-at-the-ai4opt-institute-in-georgia-tech-atlanta-about-spatial-load-balancing-details-are-here-video-of-the-talk",
          title: 'I was invited to give a talk at the AI4OPT institute in Georgia...',
          description: "",
          section: "News",},{id: "news-i-was-kindly-invited-by-matthieu-jonckheere-to-give-a-talk-at-informs-aps-2023-it-was-a-great-conference",
          title: 'I was kindly invited by Matthieu Jonckheere to give a talk at INFORMS...',
          description: "",
          section: "News",},{id: "news-our-paper-on-spatial-load-balancing-for-ev-charging-just-got-accepted-into-allerton-23",
          title: 'Our paper on spatial load balancing for EV charging just got accepted into...',
          description: "",
          section: "News",},{id: "news-our-paper-on-load-balancing-for-ev-charging-stations-just-got-accepted-into-ifip-performance-23",
          title: 'Our paper on load balancing for EV charging stations just got accepted into...',
          description: "",
          section: "News",},{id: "news-i-was-kindly-invited-by-prof-r-srikant-to-give-a-seminar-at-university-of-illinois-at-urbana-champaign-my-slides-are-here",
          title: 'I was kindly invited by Prof. R. Srikant to give a seminar at...',
          description: "",
          section: "News",},{id: "news-i-ve-recently-presented-our-paper-on-load-balancing-for-ev-charging-stations-in-ifip-performance-23-here-are-the-slides-of-the-talk",
          title: 'I’ve recently presented our paper on load balancing for EV charging stations in...',
          description: "",
          section: "News",},{id: "news-i-was-kindly-invited-by-prof-sem-borst-to-visit-tu-e-spor-cluster-it-s-been-a-great-visit-and-we-held-a-very-nice-spor-seminar-together-with-prof-benny-van-houdt-and-prof-christine-fricker-my-slides-are-here",
          title: 'I was kindly invited by Prof. Sem Borst to visit TU/e SPOR Cluster....',
          description: "",
          section: "News",},{id: "news-i-was-kindly-interviewed-in-spanish-by-emiliano-cotelo-to-discuss-the-growth-and-implications-of-data-centers",
          title: 'I was kindly interviewed (in Spanish) by Emiliano Cotelo to discuss the growth...',
          description: "",
          section: "News",},{id: "news-i-am-very-grateful-to-have-been-invited-by-professors-siva-theja-maguluri-and-debankur-mukherjee-to-visit-the-georgia-tech-isye-department-it-s-been-a-busy-week-we-held-a-very-nice-seminar-and-i-ve-met-a-lot-of-nice-colleagues",
          title: 'I am very grateful to have been invited by Professors Siva Theja Maguluri...',
          description: "",
          section: "News",},{id: "news-here-is-an-excerpt-of-my-talk-in-spanish-about-electrical-vehicles-in-the-forum-about-the-2nd-energy-transformation-my-slides-are-available-here-andrés-ferragut-en-el-foro-de-ute-segunda-transformación-energética-utedescarbonización-pic-twitter-com-obbf2temok-amp-mdash-ute-ute-comcorp-september-5-2024",
          title: 'Here is an excerpt of my talk (in Spanish) about electrical vehicles in...',
          description: "",
          section: "News",},{id: "news-this-week-we-invited-prof-jakub-tomczak-from-tu-eindhoven-to-visit-universidad-ort-uruguay-and-lecture-about-fundamentals-of-generative-ai-the-course-focus-on-the-underlying-mathematical-and-architectural-aspects-of-deep-learning-models-applied-in-generative-ai-thanks-jakub-for-accepting-the-invitation",
          title: 'This week, we invited Prof. Jakub Tomczak from TU/Eindhoven to visit Universidad ORT...',
          description: "",
          section: "News",},{id: "news-i-was-invited-by-bruce-hajek-and-r-srikant-to-present-our-paper-at-the-60th-allerton-conference-con-communications-control-and-computing-it-s-always-nice-to-visit-uiuc-and-catch-up-with-colleagues-slides",
          title: 'I was invited by Bruce Hajek and R. Srikant to present our paper...',
          description: "",
          section: "News",},{id: "projects-evqueues-jl",
          title: 'EVQueues.jl',
          description: "Julia simulator for different deadline and non-deadline based EV charging policies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/evqueues/";
            },},{id: "projects-covid-r-monitor",
          title: 'COVID R Monitor',
          description: "COVID reproduction rate monitor for the COVID Scientific Advisory group in Uruguay",
          section: "Projects",handler: () => {
              window.location.href = "/projects/monitor_r/";
            },},{id: "talks-my-invited-talk-about-ev-charging-in-the-20th-informs-applied-probability-society-conference-brisbane-australia-thanks-a-lot-to-adam-wierman-and-alessandro-zocca-for-organizing-this-session-slides",
          title: 'My invited talk about EV charging in the 20th INFORMS Applied Probability Society...',
          description: "INFORMS APS 2019",
          section: "Talks",},{id: "talks-a-talk-in-spanish-about-the-challenges-in-future-energy-networks",
          title: 'A talk (in spanish) about the challenges in future energy networks.',
          description: "IFIP Performance 2021",
          section: "Talks",},{id: "talks-my-talk-in-ifip-performance-21-about-scheduling-ev-charging-with-uncertain-deadline-information",
          title: 'My talk in IFIP Performance ‘21 about scheduling EV charging with uncertain deadline...',
          description: "IFIP Performance 2021",
          section: "Talks",},{id: "talks-my-invited-talk-about-spatially-distributed-ev-charging-during-my-visit-to-isye-department-and-ai4opt-institute-at-georgia-tech-atlanta-thanks-a-lot-to-siva-theja-maguluri-for-inviting-me-slides-video",
          title: 'My invited talk about Spatially distributed EV charging during my visit to ISyE...',
          description: "AI4OPT Seminar, Georgia Tech.",
          section: "Talks",},{id: "talks-my-invited-talk-about-spatial-estimation-of-ev-energy-demand-at-informs-aps-2023-slides",
          title: 'My invited talk about Spatial Estimation of EV energy demand at INFORMS APS...',
          description: "INFORMS APS 2023, Nancy, France",
          section: "Talks",},{id: "talks-a-recent-talk-in-spanish-about-autoregressive-generative-models-in-the-generative-models-seminar-iie-udelar-2023-thanks-to-pablo-muse-and-ernesto-mordecki-for-inviting-me-repo-and-slides",
          title: 'A recent talk (in spanish) about Autoregressive Generative Models in the Generative Models...',
          description: "Generative models seminar, UdelaR (Oct 2023)",
          section: "Talks",},{id: "talks-my-invited-talk-about-the-universal-optimality-of-timer-based-caching-policies-for-bursty-traffic-thanks-a-lot-to-r-srikant-for-inviting-me-i-had-a-great-time-in-urbana-champaign-slides",
          title: 'My invited talk about the universal optimality of timer based caching policies for...',
          description: "SINE Seminar, Coordinated Sciences Lab, UIUC.",
          section: "Talks",},{id: "talks-my-talk-about-imbalance-between-server-pools-and-applications-to-3-phase-ev-charging-in-ifip-performance-slides",
          title: 'My talk about imbalance between server pools and applications to 3-phase EV charging...',
          description: "IFIP Performance 2023, Chicago, USA.",
          section: "Talks",},{id: "talks-another-talk-on-caching-and-pre-fetching-and-the-crucial-role-of-hazard-rates-i-gave-at-the-spor-seminar-during-my-recent-visit-to-eindhoven-i-m-very-grateful-to-prof-sem-borst-for-inviting-me-slides",
          title: 'Another talk on caching and pre-fetching and the crucial role of hazard rates...',
          description: "SPOR Seminar, TU/e, Eindhoven, Netherlands",
          section: "Talks",},{id: "talks-my-talk-about-optimal-caching-policies-and-stochastic-intensities-at-the-seminario-de-probabilidad-y-estadística-uruguay",
          title: 'My talk about optimal caching policies and stochastic intensities at the Seminario de...',
          description: "Seminario PYE 2024.",
          section: "Talks",},{id: "talks-my-talk-about-optimal-caching-and-pre-fetching-using-stochastic-intensities-at-the-isye-georgia-tech-may-2024",
          title: 'My talk about optimal caching and pre-fetching using stochastic intensities at the ISyE,...',
          description: "GaTech ISyE seminar, 2024.",
          section: "Talks",},{id: "talks-my-latest-talk-on-caching-and-pre-fetching-and-the-crucial-role-of-hazard-rates-given-at-the-lincs-seminar-i-m-very-grateful-to-prof-françois-baccelli-for-inviting-me-to-be-part-of-the-seminar-series",
          title: 'My latest talk on caching and pre-fetching and the crucial role of hazard...',
          description: "SPOR Seminar, TU/e, Eindhoven, Netherlands",
          section: "Talks",},{id: "talks-my-talk-in-spanish-about-our-recent-results-in-energy-and-smart-grids-particularly-ev-charging-anii-uruguay-jul-2023-also-some-related-videos-about-our-ev-charging-project-and-a-longer-talk-about-the-mathematical-challenges-in-smart-grid-congestion-management",
          title: 'My talk (in spanish) about our recent results in Energy and Smart-Grids, particularly...',
          description: "Presentación de resultados al Comité FSE - ANII.",
          section: "Talks",},{id: "talks-my-talk-in-spanish-about-optimization-for-incorporating-ev-charging-in-the-electrical-grid-in-the-forum-about-the-2nd-energy-transformation-ute-aug-2024-pdf-version",
          title: 'My talk (in spanish) about optimization for incorporating EV charging in the electrical...',
          description: "Presentación de resultados en el Foro de 2a. Transformación Energética, UTE.",
          section: "Talks",},{id: "talks-my-talk-about-optimal-timer-based-pre-fetching-for-increasing-hazard-rates-allerton-conference-uiuc-sep-2024",
          title: 'My talk about optimal timer based pre-fetching for increasing hazard rates, Allerton Conference,...',
          description: "60th Allerton Conference, 2024.",
          section: "Talks",},{id: "teaching-network-performance-analysis",
          title: 'Network Performance Analysis',
          description: "A mixed course on mathematical analysis of networks.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/network_performance_analysis/";
            },},{id: "teaching-numerical-analysis",
          title: 'Numerical Analysis',
          description: "Undergraduate course on numerical analysis.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/numerical_analysis/";
            },},{id: "teaching-time-series-analysis",
          title: 'Time Series Analysis',
          description: "Graduate course on time series, from classical models to deep learning.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/time_series/";
            },},{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/81100424308/", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%65%72%72%61%67%75%74@%6F%72%74.%65%64%75.%75%79", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aferragu", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37317949100/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0134-5548", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=W93dcfkAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=24824496000", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
