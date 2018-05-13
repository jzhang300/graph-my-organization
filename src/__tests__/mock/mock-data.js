const data = [
  {
    Employee: "John Schumacher/Watson/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Kati F Venturato/New York/IBM",
    Location: "New York",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Misc",
    Skills: ""
  },
  {
    Employee: "Keely Wright/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Misc",
    Skills: ""
  },
  {
    Employee: "Gary Diamanti/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Architect",
    Skills: ""
  },
  {
    Employee: "Vivian W Lee/US/IBM",
    Location: "Yorktown",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Kathy Emerson/Westford/IBM@Lotus",
    Location: "Cambridge",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "German Attanasio ruiz/Boston/IBM",
    Location: "Cambridge",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Mamoon Raja/US/IBM",
    Location: "Cambridge",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Nathan D Friedly/Cincinnati/IBM",
    Location: "Remote",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Mike Mosca/Worcester/IBM",
    Location: "Littleton",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Logan Patino Middaugh/US/IBM",
    Location: "Cambridge",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Ajiemar D Santiago/Austin/IBM",
    Location: "Austin",
    "Product Family": "End to End",
    Squad: "SDKs",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Jeffrey Stylos/Boston/IBM",
    Location: "Cambridge",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "",
    Location: "",
    "Product Family": "",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "James Zhang/Austin/IBM",
    Location: "Austin",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Erika Dsouza/US/IBM",
    Location: "Cambridge",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Allen Dean/Bedford/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "Conversation",
    Role: "Information Development",
    Skills: ""
  },
  {
    Employee: "Richard Horsfall/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "End to End",
    Squad: "E2E",
    Role: "Manager",
    Skills: "ID"
  },
  {
    Employee: "Richard Horsfall/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "End to End",
    Squad: "WDC Site",
    Role: "Manager",
    Skills: "ID"
  },
  {
    Employee: "Richard Horsfall/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Portable Crawler",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Richard Horsfall/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Signal Services",
    Squad: "ID",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Nicoletta A Bleiel/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "News/E2E",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Nicoletta A Bleiel/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Robert R Berry/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "All",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Robert R Berry/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "All",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Jim Collins/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "Tooling Squad (Convo)",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Jessica Dicarlo/Worcester/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "All",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Jessica Dicarlo/Worcester/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "NLU (Discovery)",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Jeffry P Kaminski/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Signal Services",
    Squad: "ID",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Jeffry P Kaminski/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Signal Services",
    Squad: "ID",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Garrett A May/Boston/IBM",
    Location: "Cambridge",
    "Product Family": "Signal Services",
    Squad: "ID",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "",
    Location: "",
    "Product Family": "",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Garrett A May/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Discovery",
    Squad: "NLU (Discovery)",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "",
    Location: "",
    "Product Family": "",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Kevin MacDonald/Westford/IBM@Lotus",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Multiple",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Kevin MacDonald/Westford/IBM@Lotus",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Multiple",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Michelle Miller/Westford/IBM@Lotus",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Multiple",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Michelle Miller/Westford/IBM@Lotus",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Multiple",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Scot A Taylor/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, Admin (Discovery)",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Scot A Taylor/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "ID",
    Role: "Information Development",
    Skills: "ID"
  },
  {
    Employee: "Rama Akkiraju/Watson/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Senior Manager",
    Skills: "Model Builder"
  },
  {
    Employee: "Rama Akkiraju/Watson/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Senior Manager",
    Skills: "Algorithms"
  },
  {
    Employee: "Nilanjana Banerjee/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Jalal U Mahmud/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Emotion improvements",
    Role: "Manager",
    Skills: "Algorithms"
  },
  {
    Employee: "Mansurul Bhuiyan/US/IBM@IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Conversation analysis",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Mansurul Bhuiyan/US/IBM@IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Customer care tone model development",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Pritam S Gundecha/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Tone detection for conversations; Emotion improvements",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Pritam S Gundecha/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Tone detection for conversations; Emotion improvements",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Zhe Liu/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Tone detection for conversations",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Zhe Liu/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad:
      "Conducts various user studies to collect ground truth data and to test perceived accuracy of models",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Saurabh Tripathy2",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "New. First week. Customer care domain model development",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Richie V/US/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Emotion model performance",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Mengdi Zhang/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Emotion improvements",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Mengdi Zhang/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Signal Services",
    Squad: "Emotion improvements",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Vibha S Sinha/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Sentiment transition",
    Role: "Manager",
    Skills: "Model Builder"
  },
  {
    Employee: "Vibha S Sinha/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Tone Analyzer",
    Role: "Manager",
    Skills: "Algorithms"
  },
  {
    Employee: "Pierre h Arnoux/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Tone aware response",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Pierre h Arnoux/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Language enablement for Personality Insights",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Neil H Boyette/Beaverton/IBM",
    Location: "Remote",
    "Product Family": "Cross-Tribe",
    Squad: "Platform, customization, language enablement",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Hau-wen Chang/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Platform, customization, language enablement; Emotion improvements",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Nhan Hoang/Austin/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Majid Irani/Cupertino/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Sudhir Koka/San Jose/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Haibin Liu1/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Emotion Model Deep Learning Model development",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Xiaotong Liu/US/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Conversation Visualization",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Xiaotong Liu/US/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Customer Care Autodesk analysis",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Aneesh Mathew/Burlingame/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Shubhanjan Shekhar/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad:
      "Platform, customization, language enablement; Tone detection for conversations",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Yuankun Song/US/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Yingbei Tong/US/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "April Webster1/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Tone Analyzer UI development",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Fangfang Wu/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Anbang Xu/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Tone aware response generation",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Anbang Xu/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "Tone Analyzer",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Pravallika Yanamadala/Burlingame/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Huimin Zhou1/US/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "pujitha kara1/US/IBM",
    Location: "Almaden",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Holly Bloomer/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Senior Manager",
    Skills: ""
  },
  {
    Employee: "Carlton K Mason/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "CI/CD Lead",
    Skills: ""
  },
  {
    Employee: "Angela Jones/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cross-Tribe",
    Squad: "Intellectual Property",
    Role: "Legal Release Manager",
    Skills: ""
  },
  {
    Employee: "Jacqueline Perry/Poughkeepsie/IBM",
    Location: "Remote",
    "Product Family": "Cross-Tribe",
    Squad: "Intellectual Property",
    Role: "Legal Release Manager",
    Skills: ""
  },
  {
    Employee: "Joe Battaglia/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Patrick Dullea/US/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "Other"
  },
  {
    Employee: "Brian Davidson/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "Other"
  },
  {
    Employee: "Beth DeMille/Boston/Contr/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "Other"
  },
  {
    Employee: "Ward W Hopeman/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "DevOps"
  },
  {
    Employee: "Christian Holtje/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "DevOps"
  },
  {
    Employee: "Roger Leonard/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "Other"
  },
  {
    Employee: "Donovan Ramsey/US/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "Other"
  },
  {
    Employee: "Jared Wilkerson/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "DevOps"
  },
  {
    Employee: "Zachary H Zlotnik/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "DevOps"
  },
  {
    Employee: "Razeyah Stephen/Westford/IBM",
    Location: "Pittsburgh",
    "Product Family": "Cross-Tribe",
    Squad: "tronbahn",
    Role: "Build/Infra",
    Skills: "DevOps"
  },
  {
    Employee: "Marty Bray/Boston/Contr/IBM",
    Location: "Austin",
    "Product Family": "Discovery",
    Squad: "Infrastructure (NLU)",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Harold P Dubnow/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Mark DuFresne/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Personality Insights",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Efosa Elaiho/US/IBM",
    Location: "Austin",
    "Product Family": "Signal Services",
    Squad: "Tone Analyzer",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Kevin German/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "watson-discovery",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "gughappriya gnanasekar/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Joe Kubik/Austin/IBM",
    Location: "Raleigh",
    "Product Family": "Cross-Tribe",
    Squad: "watson-perfworks",
    Role: "Performance",
    Skills: "Full Stack"
  },
  {
    Employee: "Zhiqiang Luo/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Amy M Pitts/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "SVT & Performance (WVA)",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Juan Francisco Rodriguez/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "Geico escalation",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "Prangya Sahu/US/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Performance",
    Skills: "Algorithms"
  },
  {
    Employee: "David Wendt/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cross-Tribe",
    Squad: "watson-perfworks",
    Role: "Performance",
    Skills: "Full Stack"
  },
  {
    Employee: "Charles Rankin/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Manager",
    Skills: "Test Automation"
  },
  {
    Employee: "Aravinder Reddy Bandi/US/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "ci-cd-test",
    Role: "QA",
    Skills: "DevOps"
  },
  {
    Employee: "Patrick Cadogan/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Patrick Cadogan/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "End-to-end (WVA)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Todd Gerlach/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Todd Gerlach/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "End-to-end (WVA)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Lisa Mallahan/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "ci-cd-test",
    Role: "QA",
    Skills: "DevOps"
  },
  {
    Employee: "John Morganti/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Matthew W Stave/Cupertino/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "ci-cd-test",
    Role: "QA",
    Skills: "DevOps"
  },
  {
    Employee: "Ajay k Tuniki/New York/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Jeff Jablonowski/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Speech & Visual Recognition Engineering ",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Jeff Jablonowski/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Speech & Visual Recognition Engineering ",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Michael Sallese/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Bharat M Bhavsar/US/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Kimilee Gile/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Titus Kao/Cambridge/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Scott Kolodzy/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Minhaz Palasara/US/IBM",
    Location: "New York",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Kyle Slachta/US/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Mark Tucker/Worcester/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Joseph T Wissmann/Waltham/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Vance Vu/US/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Alisa Zhila1/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ashok Kumar/Bedford/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Speech Engineering ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Jaye Fitzgerald/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Chetan Mishra/US/IBM@IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Rafael Leano",
    Location: "Littleton",
    "Product Family": "Signal Services",
    Squad: "Visual Recognition Engineering ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Tony Lee/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Tooling + Demos (STT, TTS)",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Daniel Bolanos/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Speech Service Dev",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Alexander Faisman/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Customer Projects (Speech)",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Yinghui Huang/New York/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Customer Projects (Speech)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Keerthana Kumar/New York/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "End-to-end Testing (Speech)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Miroslav Novak/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Speech Engineering ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Charles A Prosser/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Speech Deployment",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "LEONID RACHEVSKY/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Service Development",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "LEONID RACHEVSKY/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Service Development",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Alexandra T Reilly/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "End-to-end Testing (Speech)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "J Ramanujam/US/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Larry Sansone/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Customer Projects (Speech)",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Maria Smith/Boca Raton/IBM",
    Location: "Remote",
    "Product Family": "Signal Services",
    Squad: "TTS Engine",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Gakuto Kurata/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Masayuki A Suzuki/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Signal Services",
    Squad: "AM Customization",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Nobuyasu Itoh/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Signal Services",
    Squad: "Customer Projects (Speech)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Takashi Fukuda/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Signal Services",
    Squad: "Student-Teacher",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Arthur Kantor/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "Speech Platform",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Petr Novak3/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Josef Vopicka1/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "STT engine",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Juraj Figura/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "Speech Platform",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Martin Penicka/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "STT Engine",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Michal Juza/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "STT Engine",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Petr Fousek/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "STT Engine",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Roman Otec/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "Development: Tooling + Demos (STT, TTS)",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Jakub Krchak/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Michal Mylek/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Jan Bartosek/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Vaclav Prochazka/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Ota Sandr/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Hui Liao/Cupertino/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Stan Bielski/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Architect",
    Skills: "Full Stack"
  },
  {
    Employee: "Laura Chiticariu/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "NLU architecture",
    Role: "Architect",
    Skills: "Architecture"
  },
  {
    Employee: "Will Chaparro/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Charles J Gala/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Train (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Aiton Goldman/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Search (Discovery)",
    Role: "Developer",
    Skills: "Back end"
  },
  {
    Employee: "Wentao Jiang1/New York/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Search (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Eric R Kaun/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Train (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Michael Keeling/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Train (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Michael Lipschultz/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Search (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Joseph Runde/US/IBM@IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Train (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Anastas Stoyanovsky/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WIRE Search (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Aaron Chavez/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Architect",
    Skills: "Full Stack"
  },
  {
    Employee: "Aaron Chavez/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Architect",
    Skills: "Full Stack"
  },
  {
    Employee: "Michael G Dellinger/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Bruce Adams/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "End-to-end (Discovery)",
    Role: "developer",
    Skills: "Test Automation/Back end"
  },
  {
    Employee: "Brian Berkheiser/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Front-end API (Discovery)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Valeria Brusilovsky/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "End-to-end (Discovery)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Benjamin Dewan/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "End-to-end (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Benjamin Dewan/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "End-to-end (Discovery)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Naga Katreddi/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "L3",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "John Krofchek/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Watson News (Discovery)",
    Role: "Developer",
    Skills: "Back end"
  },
  {
    Employee: "Rebecca Makar/US/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Watson News (Discovery)",
    Role: "developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Poornima Narayana swamy/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Watson News (Discovery)",
    Role: "developer",
    Skills: "Test Automation/Dev ops"
  },
  {
    Employee: "Arun Suresh/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Discovery API connectivity",
    Role: "developer",
    Skills: "Back end / Dev ops"
  },
  {
    Employee: "Phil Hayes/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Mauricio A Hernandez/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Architect",
    Skills: ""
  },
  {
    Employee: "Howard Ho/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Compare & comply",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Anirudha S Bapat/Durham/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Arnaldo Carreno-Fuentes1/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Arnaldo Carreno-Fuentes1/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Sunita Chhimwal/Burlingame/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Poornima Chozhiyath raman/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Poornima Chozhiyath raman/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Poornima Chozhiyath raman/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Vineet Dhanawat/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Vineet Dhanawat/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Samarth Dhingra/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Samarth Dhingra/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Samarth Dhingra/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Samved C Divekar/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Samved C Divekar/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Don Han/US/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Don Han/US/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Don Han/US/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Henry Laih/Almaden/Contr/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Satishkumaar Manivannan/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Satishkumaar Manivannan/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Saurav Shekhar/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Saurav Shekhar/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Steven Soria/Santa Teresa/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Back-end/ Performance"
  },
  {
    Employee: "Steven Soria/Santa Teresa/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Pradeep B Teregowda/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Pradeep B Teregowda/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Mitesh H Vasa/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Mitesh H Vasa/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Mitesh H Vasa/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Joyce Wang/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Test Automation/ DevOps"
  },
  {
    Employee: "Joyce Wang/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: " Front-end API (Discovery) ",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Weiqiang Zhuang/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Joseph R Kramer/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "End-to-end (Discovery)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Joseph R Kramer/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Joseph R Kramer/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Query API",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "David Beshero/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "Developer",
    Skills: "Front End"
  },
  {
    Employee: "Zachary M. Dernar/US/IBM@IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Demo/ASK (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Mike Ferchak/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "Developer",
    Skills: "Front End"
  },
  {
    Employee: "Chris Gillin/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Query (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Jean Lange/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Jennifer A Manning/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Query (Discovery)",
    Role: "Developer",
    Skills: "Back End"
  },
  {
    Employee: "Savita Nagaraj/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Natalie Nash1/US/IBM@IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Cheng Tan/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Andrew P Turgeon/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Demo/ASK (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Alex Tambellini/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Laxmi Vennam/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Demo/ASK (Discovery)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Gary Williams/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Query (Discovery)",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Devin Harper/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Data Science",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Manjari S Akella/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Discovery Data Science/Query Workflows",
    Role: "Developer",
    Skills: "Models/back-end/algorithms"
  },
  {
    Employee: "David Biagioni/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Discovery Data Science/Query Workflows",
    Role: "Manager",
    Skills: "Models/back-end/algorithms"
  },
  {
    Employee: "Gabriel Hart/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Discovery Data Science/Query Workflows",
    Role: "Developer",
    Skills: "Models/back-end/algorithms"
  },
  {
    Employee: "Joshua Holmgren/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Discovery Data Science/Query Workflows",
    Role: "Developer",
    Skills: "Back-end/algorithms"
  },
  {
    Employee: "Travis S Johnson/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Discovery Data Science/Query Workflows",
    Role: "Developer",
    Skills: "Models/back-end/algorithms"
  },
  {
    Employee: "Mark Tyneway/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Discovery Data Science/Query Workflows",
    Role: "Developer",
    Skills: "Back-end/algorithms"
  },
  {
    Employee: "Ryan P Whitnah/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Discovery Data Science/Query Workflows",
    Role: "Developer",
    Skills: "Back-end/algorithms"
  },
  {
    Employee: "Stuart Horner/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Logging/visibility",
    Role: "Developer",
    Skills: "Service Stability"
  },
  {
    Employee: "Stuart Horner/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Infrastructure/maintenance",
    Role: "Developer",
    Skills: "Service Stability"
  },
  {
    Employee: "Nhat-an Luu/Austin/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Scott Ribe/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "URL Fetcher",
    Role: "Developer",
    Skills: "Service Stability"
  },
  {
    Employee: "Scott Ribe/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Infrastructure/maintenance",
    Role: "Developer",
    Skills: "Service Stability"
  },
  {
    Employee: "Pawan Lakshmanan/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Architect",
    Skills: ""
  },
  {
    Employee: "Adam Schirmacher/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Infrastructure/kube",
    Role: "Manager",
    Skills: "Service Stability"
  },
  {
    Employee: "Adam Schirmacher/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Infrastructure/maintenance",
    Role: "Manager",
    Skills: "Service Stability"
  },
  {
    Employee: "Olivia M Buzek/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Olivia M Buzek/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Olivia M Buzek/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Olivia M Buzek/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Joshua C Elliott/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Productization (NLU)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Joshua C Elliott/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Productization (NLU)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Daniel Gonzalez/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Daniel Gonzalez/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Daniel Gonzalez/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Daniel Gonzalez/Denver/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Gaurav Kumbhat/US/IBM@IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Productization (NLU)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Gaurav Kumbhat/US/IBM@IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Productization (NLU)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Shranith Linga1/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Shranith Linga1/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Shranith Linga1/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Shranith Linga1/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Paolo Papi/Austin/IBM",
    Location: "Austin",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Paolo Papi/Austin/IBM",
    Location: "Austin",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Sukriti Sharma4/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Algorithms (NLU)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Sukriti Sharma4/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "Productization (NLU)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Sabarish Subramanian/US/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end, Algorithms"
  },
  {
    Employee: "Justin Ziniel/Dublin/IBM",
    Location: "Denver",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Developer",
    Skills: "Back-end, Algorithms"
  },
  {
    Employee: "Scott Lindner/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy (Discovery)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "David Bradley/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Stephanie Cano/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Justin M Fiore/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, Admin (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Jason E Gerlowski/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "a latsko/US/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Steven Pritko/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Architect",
    Skills: "Full Stack"
  },
  {
    Employee: "Steven Pritko/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Architect",
    Skills: "DevOps"
  },
  {
    Employee: "Stephen Ramusivich/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Aaron M Santavicca/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Stanley P Shivell/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Gregory Seaman/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "John Smodic/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "R&R/ES Multi Tenancy/Front-End Mgmt (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Cory Thoma/US/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Watson front end API",
    Role: "developer",
    Skills: ""
  },
  {
    Employee: "Eric Oehlschlager/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Tibor Dumitriu/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Bartholomew Elliott/US/IBM@IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Sue Estrada/Boca Raton/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Matt Fulgo/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Roxana Gheorghiu/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Jim Hurne/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Anton Prevosti-Vives/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Sourya Sharma/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Victoria Yew/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "developer",
    Skills: "Test Automation/back end"
  },
  {
    Employee: "Nan Yu/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Ingestion: Doc Conv, Orch, FE ingest, Enrich, Meter (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Nidhi Rajshree/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Nitish Aggarwal/US/IBM@IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Nitish Aggarwal/US/IBM@IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Isaac Cheng/Santa Teresa/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Isaac Cheng/Santa Teresa/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Alok Goel/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Alok Goel/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Chenchen Huang/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Chenchen Huang/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Manvi Malik/New York/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Manvi Malik/New York/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Pongsakorn Sukjunnimit/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Pongsakorn Sukjunnimit/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ying Zhang/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Ying Zhang/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Ying Zhang/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "Knowledge Graph (Discovery)",
    Role: "Developer",
    Skills: "Other"
  },
  {
    Employee: "Kaori Namba/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Manager",
    Skills: "Full Stack"
  },
  {
    Employee: "Yannan Chang/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Ryo Imai/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Hiroaki Komine/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Ken K Kumagai/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Hiroya Matsubara/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Takuma Murakami/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Motosugi Murata/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "QA",
    Skills: "Test Automation"
  },
  {
    Employee: "Akihiro Nakayama/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Hirofumi Nishikawa/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Yuka Nomura/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Atsushi 1 Ono/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Chikako Oyanagi/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Kei Sugano/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Teruki Tauchi/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Takumi Yanagawa/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Yoshiki Yatsu/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Shimpei Yotsukura/Japan/IBM",
    Location: "Tokyo",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Michael Picheny/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Senior Manager",
    Skills: "Management"
  },
  {
    Employee: "Kenneth W Church/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Diarization",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Ellen Kislal/Cambridge/IBM",
    Location: "Cambridge",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Jarret Ross/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Pierre Dognin/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Pierre Dognin/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Steven J Rennie/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Steven J Rennie/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Tom Sercu1/US/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Tom Sercu1/US/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Xiaodong Cui/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Xiaodong Cui/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Youssef Mroueh1/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Youssef Mroueh1/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Multimodal (Speech)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "David Haws/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Payload",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "David Haws/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Payload",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Dimitrios B Dimitriadis/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Dimitrios B Dimitriadis/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Hong-kwang Kuo/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Hong-kwang Kuo/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Samuel Thomas/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Samuel Thomas/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Language Acceleration",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "George Saon/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "STT Features/Robustness/Model updates",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "George Saon/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "STT Features/Robustness/Model updates",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Bhuvana Ramabhadran/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Andrew M Rosenberg/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "TTS Features",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Andrew M Rosenberg/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "TTS Features",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ewout Van den berg/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Research Infrastructure",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Ewout Van den berg/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Research Infrastructure",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Kartik Audhkhasi2/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "E2E",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Kartik Audhkhasi2/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "E2E",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Zoltan Tuske",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Raul Fernandez/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "TTS Features",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Raul Fernandez/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "TTS Features",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Stanley Chen/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Research Infrastructure",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Stanley Chen/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Research Infrastructure",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Charles F Wiecha/Watson/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Senior Manager",
    Skills: "Management"
  },
  {
    Employee: "Muhtar B Akbulut/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Muhtar B Akbulut/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU/System Content (Convo)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Muhtar B Akbulut/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Migration (Convo)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Vedant Agrawal/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Premsankar Alwarsamy/Dublin/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "John Colby/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-System Content (Convo)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "William Dickerson/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Karen W Harris/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Dan O'Connor/Cambridge/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "CLU-System Content (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Sudheer r Puthana/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-System Content (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Andrew Stoneberg/Dublin/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Charles de Saint-Aignan/Cambridge/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Architect",
    Skills: "Architect"
  },
  {
    Employee: "Collin Murray/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Collin Murray/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Ashima Arora/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Tom Boyd/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Man Chu/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Paul Chyu/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Melissa Lord/US/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Prerna Luthra/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "David C Ohlemacher/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Manu Thapar/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "David G Terry/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "William Williams/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Rangachari Anand/Watson/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "CLU-System Content (Convo)",
    Role: "Architect",
    Skills: "Full Stack"
  },
  {
    Employee: "Gail D Burati/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Gail D Burati/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Jim Busche/San Jose/IBM",
    Location: "Almaden",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Paul Dick/Cambridge/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Venkat r Ganesh sekar/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Christophe Gauge/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "James Hennessy/Endicott/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Architect",
    Skills: "Back-end"
  },
  {
    Employee: "Nick Hill/Silicon Valley/IBM",
    Location: "Almaden",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Architect",
    Skills: "Back-end"
  },
  {
    Employee: "Nadiya Kochura/Worcester/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Nadiya Kochura/Worcester/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-System Content (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Christopher J Karle/Cambridge/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Architect",
    Skills: "Full Stack"
  },
  {
    Employee: "Keith LaMotte/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Dialog (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "AJ Morello/Westford/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Architect",
    Skills: "Full Stack"
  },
  {
    Employee: "Shubham Mudgal/US/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Architect",
    Skills: ""
  },
  {
    Employee: "Navneet N Rao1/Boston/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Derek Reedy/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Andy Scharmer/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Andy Scharmer/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Cross-cutting (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Andy Scharmer/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Developer(Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Tim Snow/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "Cross-cutting (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Haoyu Wang1/Boston/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Haoyu Wang1/Boston/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "CLU-Infrastructure (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Joe Zaffarano/Westford/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "EImprove (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Joe Zaffarano/Westford/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "Migration (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Carol Zimmet/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Release Manager",
    Skills: "Back-end"
  },
  {
    Employee: "Jan Kleindienst/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Manager",
    Skills: "Algorithms"
  },
  {
    Employee: "Jan Macek2/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Manager",
    Skills: "Full Stack"
  },
  {
    Employee: "Michael Smutny/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Michael Smutny/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Ondrej Psota1/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Feraena Bibyna/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "CLU-System Content (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Pavel Jancik/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Jan Vystrcil/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Tereza Kasparova/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Tereza Kasparova/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Martin Labsky/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Manager",
    Skills: "Full Stack"
  },
  {
    Employee: "Martin Labsky/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Manager",
    Skills: "Engine Builder"
  },
  {
    Employee: "Michal Bida/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Jan Forch/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Rudolf Kadlec/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ondrej Bajgar/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Jan Curin/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Tomas Macek/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Dialog (Convo)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Martin Cochner/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Adam Lukes1/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Developer",
    Skills: "DevOps"
  },
  {
    Employee: "Ladislav Kunc1/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ladislav Kunc1/Czech Republic/IBM",
    Location: "Prague",
    "Product Family": "Conversation",
    Squad: "CLU System Content (Convo)",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Brian Hulse/UK/IBM",
    Location: "Hursley",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Tim Baldwin/UK/IBM",
    Location: "Hursley",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Andrew Borley/UK/IBM",
    Location: "Hursley",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo) ",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Simon Burns/UK/IBM",
    Location: "Hursley",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "David George2/UK/IBM",
    Location: "Hursley",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Robert Hunter/UK/IBM",
    Location: "Hursley",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Philip J McCormick/UK/IBM",
    Location: "Hursley",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "John Zakos/Australia/Contr/IBM",
    Location: "Australia",
    "Product Family": "Conversation",
    Squad: "Digital Enablement (Convo)",
    Role: "Architect",
    Skills: "Architect"
  },
  {
    Employee: "John Zakos/Australia/Contr/IBM",
    Location: "Australia",
    "Product Family": "Conversation",
    Squad: "Migration (Convo)",
    Role: "Architect",
    Skills: "Architect"
  },
  {
    Employee: "Oliver Ivanoski/Australia/IBM",
    Location: "Australia",
    "Product Family": "Conversation",
    Squad: "Digital Enablement (Convo)",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Oliver Ivanoski/Australia/IBM",
    Location: "Australia",
    "Product Family": "Conversation",
    Squad: "Migration (Convo)",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Steve Green/Australia/IBM",
    Location: "Australia",
    "Product Family": "Conversation",
    Squad: "Digital Enablement -> Migration (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Aameek Singh/Almaden/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Mike Bouldin/Austin/IBM",
    Location: "Austin",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Mike Bouldin/Austin/IBM",
    Location: "Austin",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Mike Bouldin/Austin/IBM",
    Location: "Austin",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Mike Bouldin/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "Christopher J Brock/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Milton Alvarez/North Reading/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Danny K Brigance/Dallas/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Rakesh Reddy Bandi/US/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "SRE",
    Role: "Developer",
    Skills: "Devops"
  },
  {
    Employee: "Jack Ciejek/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Michael J Donati/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Elie Feirouz/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Gareth Holl/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Jeffrey Laurenza/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Padma Malladi/Cupertino/IBM",
    Location: "Almaden",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Donald McNeil/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Saidah Neves/North Reading/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Chuck Pathanjali/Nashville/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Atif Siddiqui/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "William Turosz/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "John Thornton/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Kristin Tousignant/North Reading/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Mary Yost/Somers/IBM",
    Location: "Yorktown",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Joseph Mao/Australia/IBM",
    Location: "Australia",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Peter Coorie/Australia/IBM",
    Location: "Australia",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Helen Keyes/Ireland/IBM",
    Location: "Ireland",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Jamie Gilbert/Ireland/IBM",
    Location: "Ireland",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "SRE & Support",
    Skills: ""
  },
  {
    Employee: "Vicki Chavis/Orlando/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Release Manager",
    Skills: ""
  },
  {
    Employee: "Lisa A Juliani/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Alex Canady/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Architect / Tech Lead",
    Skills: ""
  },
  {
    Employee: "Lance Garms/Bethesda/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Security & Compliance",
    Skills: "Compliance Adoption"
  },
  {
    Employee: "Robert Koenig/Austin/IBM",
    Location: "Austin",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Engineer / Tech Lead",
    Skills: ""
  },
  {
    Employee: "James Michels/Southbury/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Finance Operations Manager",
    Skills: ""
  },
  {
    Employee: "Ken Floyd/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Business Operations",
    Skills: ""
  },
  {
    Employee: "CD Osborne/Boulder/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Deploy Manager",
    Skills: "Project Mgmt"
  },
  {
    Employee: "Annette Patton/Atlanta/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Deploy Manager",
    Skills: "Project Mgmt"
  },
  {
    Employee: "Isaac M Robinson/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Engineer / Tech Lead",
    Skills: ""
  },
  {
    Employee: "Robert Steinhilber/Southbury/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Engineer / Tech Lead",
    Skills: ""
  },
  {
    Employee: "Robert Smith/Pittsburgh/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Architect / Tech Lead",
    Skills: ""
  },
  {
    Employee: "Henry Will/Paramus/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Deploy Manager",
    Skills: "Project Mgmt"
  },
  {
    Employee: "Iain McIntosh/Australia/IBM",
    Location: "Australia",
    "Product Family": "Customer Projects",
    Squad: "Deploy ",
    Role: "Architect / Tech Lead",
    Skills: ""
  },
  {
    Employee: "J William Murdock/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Manager",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Rishav Chakravarti/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Eun Y Ha/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Chung-wei Hang/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Kazi S Hasan/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Nisarga Markandaiah/Boston/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D,Back-end"
  },
  {
    Employee: "Christopher Nolan/Boston/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Lin Pan/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Prathyusha Peddi/Dublin/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D"
  },
  {
    Employee: "Vishesh Raimugia/US/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Mary D Swift/Boston/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "WIRE DeepQA",
    Role: "Developer",
    Skills: "Algorithms,R&D,Annotation"
  },
  {
    Employee: "Jeff Matteo/Dublin/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Jeff Matteo/Dublin/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Manager",
    Skills: "Management"
  },
  {
    Employee: "Richard Belscher/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Compute",
    Role: "Developer",
    Skills: "Devops"
  },
  {
    Employee: "Qihang Chen/Raleigh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Cognitive Foundation",
    Squad: "Runtime",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Daniel Cheng/Austin/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Data & Storage",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Aaron M Cohen/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "Runtime",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Kelly Dresnek/Dublin/IBM",
    Location: "Remote",
    "Product Family": "Cross-Tribe",
    Squad: "Legacy WEA",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Manikandan Gurusankar/Dublin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Runtime",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Steven E Harris/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Cognitive Foundation",
    Squad: "Runtime",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Ketan Jani/US/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Network",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Devon Kearney/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Network",
    Role: "Developer",
    Skills: "Devops"
  },
  {
    Employee: "James C Schweitzer/Charlotte/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Compute",
    Role: "Developer",
    Skills: "Devops"
  },
  {
    Employee: "Scott Symes/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Compute",
    Role: "Developer",
    Skills: "Devops"
  },
  {
    Employee: "Allison Grace Symes/US/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Network",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Hong Zeng/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Network",
    Role: "Developer",
    Skills: "Architect"
  },
  {
    Employee: "Fan Zhang/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "Speech",
    Role: "Developer",
    Skills: "Back-end, Algorithms"
  },
  {
    Employee: "Aroopratan D Pandya/Poughkeepsie/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Rakesh Alavarthi ramaraju/Boston/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Data & Storage",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Nizar M Alseddeg/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis/ Metering",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Kelly Abuelsaad/Poughkeepsie/IBM",
    Location: "Yorktown",
    "Product Family": "Cognitive Foundation",
    Squad: "Serve Achitecture",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Sasha Beltinova/US/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Serve Achitecture",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Bruce Benfield1/US/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Data & Storage",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Santosh S Borse/Somers/IBM",
    Location: "Yorktown",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Scott Crowther/Poughkeepsie/IBM",
    Location: "Yorktown",
    "Product Family": "Cognitive Foundation",
    Squad: "Data & Storage",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Prashant Gupta/Durham/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis/ Metering",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Xiao Hu/Boston/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Anand Kuchibotla/US/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Multi DC",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Harinarayanan Mohan/US/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Bim Ola/US/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Contious Delivery",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Alwin Philip/Dallas/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "Data & Storage",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Rafael R Polanco/Poughkeepsie/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Bhujang Rajendran/Seattle/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Data & Storage",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Vivekanand Ramakrishnan/New York/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Venudhar Ravishankar",
    Location: "",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Dan Rosato/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Atin Sood/Dublin/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Data & Storage",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "V Wong Jew/US/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Manfred Zhang/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Yu Zheng/New York/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Yi Zheng/New York/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Operational Vis ",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Don Randall/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Manager",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Lewai Attia/US/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "DevOps",
    Skills: ""
  },
  {
    Employee: "Charlie Crawford/McLean/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Resiliency/Chaos",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Freddys Espinoza/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Train Architecture",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Christopher C Falone/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Data Architecture",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Allison Lynch/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "Data Architecture",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Ramakanth Manga/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Serve Achitecture",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Laurie Morse/Boston/Contr/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Cloud Integration Layer",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Andrew H Pham/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Legacy Cloud Platform",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Vinodkumar Raghavan/Lexington/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "Data Architecture",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Tam C Tran/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Lead and E2E/SVT",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Steven Vuong/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "DLaaS",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Vikram Vuppla/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Train Architecture",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Shonak Valvekar/Boston/Contr/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Cloud Integration Layer",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Roshane Williams/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Cloud Integration Layer",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Kathleen Wassell/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Performance",
    Role: "Test",
    Skills: ""
  },
  {
    Employee: "Jerald Schoudt/Boulder/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Chris Alkov/Austin/IBM",
    Location: "Remote",
    "Product Family": "Cognitive Foundation",
    Squad: "Train",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Deepak Bastakoty/New York/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Speech",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Jeff Cates/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "API Delivery",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Albert A Delucca/Poughkeepsie/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "API Delivery, Data exhaust",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Paritosh Desai/US/IBM",
    Location: "Austin",
    "Product Family": "Cognitive Foundation",
    Squad: "Opvis/Metering",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Susan L Diamond/Poughkeepsie/IBM",
    Location: "Yorktown",
    "Product Family": "Cognitive Foundation",
    Squad: "DLaaS",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Samir J Patel/Westford/IBM@Lotus",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "API Delivery",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "David Shepard/Durham/IBM",
    Location: "New York",
    "Product Family": "Cognitive Foundation",
    Squad: "Serve",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Jason Simoneau/Cambridge/IBM",
    Location: "Littleton",
    "Product Family": "Cognitive Foundation",
    Squad: "API Delivery",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Sung-Ik Son/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Cognitive Foundation",
    Squad: "Datapower",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Andres Villa/US/IBM@IBM",
    Location: "Cambridge",
    "Product Family": "Cognitive Foundation",
    Squad: "API Delivery",
    Role: "SRE & Dev",
    Skills: ""
  },
  {
    Employee: "Suneil H Berajawala/Westford/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "NLC",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Saloni Potdar1/Boston/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Inkit Padhi1/US/IBM@IBM",
    Location: "Yorktown",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ming Tan/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Lidan Wang/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Conversation",
    Squad: "NLC",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ruijian Wang/US/IBM",
    Location: "Yorktown",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Yang Yu/Boston/IBM",
    Location: "Littleton",
    "Product Family": "Conversation",
    Squad: "CLU-Algorithms (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Adam Orentlicher/Watson/IBM",
    Location: "Raleigh",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Susan Hamel/Orlando/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Release Manager",
    Skills: "Project Mgmt, Client support"
  },
  {
    Employee: "John Kellerman/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Senior Manager",
    Skills: ""
  },
  {
    Employee: "Joshua Angelucci/Dublin/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Andrew J Borley/US/IBM@IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "GEICO Lab Advocate",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Steven Frink/US/IBM@IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Joe Gdaniec/Endicott/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Brian L King/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Release Manager",
    Skills: "RM"
  },
  {
    Employee: "William Chavez-Salinas/US/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Anthony Diaz/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Ryunosuke Komiyama/US/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Abhishek Preman1/US/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Eric Wayne/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Manager",
    Skills: "Back-end"
  },
  {
    Employee: "Kyle Croutwater/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Xavier R Dharmaiyan/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "N Daniel Kumar/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Haarthi P/US/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Cheyenne Parsley/US/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Suhas prasad/US/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Stephan J Roorda/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Architect",
    Skills: "Back-end"
  },
  {
    Employee: "David Schmidt/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Vikrant Verma/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Richa Verma/San Francisco/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Michael Whitley/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Le Zhang/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Zhe Zhang1/Durham/IBM",
    Location: "Raleigh",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Luis A Lastras/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Conversation",
    Squad: "Manage (WVA)",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Ayush Gupta1/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Tinkam Ho/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Conversation",
    Squad: "Data/NLC (WVA)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Neil R Mallinar/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Data/NLC (WVA)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Abhishek Shah1/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Josh Sharpe/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Mikhail Sushkov/Almaden/IBM",
    Location: "Yorktown",
    "Product Family": "Conversation",
    Squad: "Data/NLC (WVA)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Ryan Walter Simpson/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "PhucAnh Tran/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "User Interface (WVA)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Ateret Anaby-Tavor/Haifa/IBM",
    Location: "Haifa",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Rotem Aharonov/Haifa/Contr/IBM",
    Location: "Haifa",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "David Amid/Haifa/IBM",
    Location: "Haifa",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Anna Bekkerman/Haifa/IBM",
    Location: "Haifa",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "David Boaz/Haifa/IBM",
    Location: "Haifa",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Amir Kantor/Haifa/IBM",
    Location: "Haifa",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Yara Safadi/Haifa/IBM",
    Location: "Haifa",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Dan Wiggins/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Manage (WVA)",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Rashmi Avancha/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Dialog (WVA)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Indervir Singh Banipal/US/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Dashboard (WVA)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Joshua Black/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "User Interface (WVA)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Vishal Manghnani/US/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Ahmed Nassar/Houston/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Oliver O/US/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Javier H Pedemonte/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "User Interface (WVA)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Rajendra G Ugrani/Dallas/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Rajendra G Ugrani/Dallas/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Dialog (WVA)",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Jagan m Vujjini/Durham/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "BOT Platform (WVA)",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Tyler Williams1/US/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "User Interface (WVA)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Ethan Winters/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "User Interface (WVA)",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Salim Roukos/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Salim Roukos/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Cristina Altieri-Martinez/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "miguel ballesteros/US/IBM@IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Graeme W Blackwood/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Georgiana Dinu/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Joekie Gurski/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Kat Harkavy/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Nicholas S Kersting/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Young-suk Lee/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Tahira Naseem/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Baskaran Sankaran/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Christoph Tillmann/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Chie Ugumori/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Eva-Maria Wolfe/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Juergen Bross/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Juergen Bross/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Radu Florian/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Parul Awasthy/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Loretta Bandera/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Vittorio Castelli/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Discovery",
    Role: "Architect",
    Skills: "Algorithms"
  },
  {
    Employee: "Martin Franz/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Sanjita Gupta/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Gourab Kundu/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Yoong k Lee/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Scott McCarley/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Taesun Moon/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Mohamed K Omar/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Cezar Pendus/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Roxana Passaro/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Arafat Sultan/US/IBM@IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Avirup Sil/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Amit R Singh/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Marina Variano/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Hui Wan/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Shalini Gilra/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "QA",
    Skills: "QA"
  },
  {
    Employee: "Shalini Gilra/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "QA",
    Skills: "QA"
  },
  {
    Employee: "Wael Hamza/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Manager",
    Skills: "Back-end"
  },
  {
    Employee: "Martin Cmejrek/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Yousef El-kurdi/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Developer",
    Skills: "Engine Builder"
  },
  {
    Employee: "Niyu Ge/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Zhiguo Wang/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Jian-ming Xu/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Rong Zhang/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Abraham Mathews/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Test Automation"
  },
  {
    Employee: "Mohamed Nasr/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Developer",
    Skills: "Annotation"
  },
  {
    Employee: "Jian Ni/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "John Pitrelli/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Developer",
    Skills: "Model Builder"
  },
  {
    Employee: "Andrzej Sakrajda/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Andrzej Sakrajda/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Zareen Syed/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Zareen Syed/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Todd Ward/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Discovery",
    Role: "Manager",
    Skills: "Algorithms"
  },
  {
    Employee: "Jason W Pelecanos/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "Conversation",
    Role: "Developer",
    Skills: "Algorithms"
  },
  {
    Employee: "Irina Paegelow/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Jerome L Quinn/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Discovery",
    Role: "Developer",
    Skills: "Back-end"
  },
  {
    Employee: "Daniele Rosso/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Jinwon Yeo/Watson/Contr/IBM",
    Location: "Yorktown",
    "Product Family": "Discovery",
    Squad: "NLU",
    Role: "Language Annotator",
    Skills: "Annotation"
  },
  {
    Employee: "Weizhong Zhu/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Signal Services",
    Squad: "Conversation",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Beth Smith/Silicon Valley/IBM",
    Location: "Yorktown",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "George Champlin-Scharff/Westford/IBM",
    Location: "Cambridge",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Agile Coach",
    Skills: "Agile Coach"
  },
  {
    Employee: "Micaela Eller/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "OTPM",
    Skills: "Program Management"
  },
  {
    Employee: "Paula Girshman/New York/IBM",
    Location: "New York",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Tom Griffin/US/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Agile Coach",
    Skills: "Agile Coach"
  },
  {
    Employee: "Keith Howard/US/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Manager",
    Skills: "UX Design"
  },
  {
    Employee: "Ricardo Elizondo costa/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Desiree Z Garcia/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Caitlin Gettinger/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Design (WVA)",
    Role: "Design",
    Skills: "Visual/UX"
  },
  {
    Employee: "Justin D James/US/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "Improve (Convo)",
    Role: "Design",
    Skills: "Visual/UX"
  },
  {
    Employee: "Greg Kida/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Design (WVA)",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Ellen R Kolsto/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Design",
    Skills: "User Research"
  },
  {
    Employee: "Francesco Nasso/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Design",
    Skills: "User Research"
  },
  {
    Employee: "Paul R Parson/US/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Design",
    Skills: "Visual/UX"
  },
  {
    Employee: "Justin G Wetz/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Design",
    Skills: "Visual/UX"
  },
  {
    Employee: "Sarah E Knudson/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "OTPM",
    Skills: "Program Management"
  },
  {
    Employee: "Mark Marrara/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Manager",
    Skills: "UX Design"
  },
  {
    Employee: "Randall Gregory/Austin/IBM",
    Location: "Austin",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Design",
    Skills: "Visual/UX"
  },
  {
    Employee: "Ashwini A Kamath/Austin/IBM",
    Location: "Austin",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Design",
    Skills: "User Research"
  },
  {
    Employee: "Sambit Pattnaik1/US/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Thomas L Roach/Austin/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Carol J Smith/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Manager",
    Skills: "UX Design"
  },
  {
    Employee: "Carol J Smith/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Strategy (WDS)",
    Role: "Manager",
    Skills: "UX Design"
  },
  {
    Employee: "Stephanie L Brunner/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (WDS)",
    Role: "Design",
    Skills: "Visual Design"
  },
  {
    Employee: "Kimberly Callery/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (WDS)",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Danny Cohen/US/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Ashley Golen/US/IBM@IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Strategy (WDS)",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Shuangshuang Li/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (WDS)",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Angela M Swindell/Austin/IBM",
    Location: "Austin",
    "Product Family": "Discovery",
    Squad: "WKS Tooling",
    Role: "Design",
    Skills: "Visual Design"
  },
  {
    Employee: "Adi Veerubhotla/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "Tooling (WDS)",
    Role: "Design",
    Skills: "User Research"
  },
  {
    Employee: "Alvaro J Soto fernandez/Austin/IBM",
    Location: "Austin",
    "Product Family": "End to End",
    Squad: "",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Alvaro J Soto fernandez/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Design",
    Skills: "UX Design"
  },
  {
    Employee: "Jennifer Sukis/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Design",
    Skills: "Visual Design"
  },
  {
    Employee: "Leah A Lawrence/Durham/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Design",
    Skills: "Visual Design"
  },
  {
    Employee: "Changchen H Sanchez/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Design",
    Skills: "Design"
  },
  {
    Employee: "Manoj Bapat/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "Strategy OM",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Erik Didriksen/Chicago/IBM",
    Location: "Remote",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Manager",
    Skills: "OM-Lead"
  },
  {
    Employee: "Megan L Bos/Chicago/IBM",
    Location: "Remote",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Bryan R Horowitz/US/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - BI"
  },
  {
    Employee: "Kyla B Moran/Chicago/IBM",
    Location: "Remote",
    "Product Family": "Discovery",
    Squad: "C&C App",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Nada Zaher/US/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "C&C App",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Reah Miyara/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "C&C App",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Alexander E Ocampo/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "C&C App",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Nitin Kapoor/Bethesda/IBM",
    Location: "Remote",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Morgan Arthur/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Offering Manager",
    Skills: "OM - BI"
  },
  {
    Employee: "Kevin Chu/US/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Reid M Francis/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Vijayaraman Ilankamban/US/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "Company Profiler",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Kaveh Massoudian/Austin/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "Content Strategy",
    Role: "Manager",
    Skills: ""
  },
  {
    Employee: "Lorne Goodman/Dublin/Contr/IBM",
    Location: "Austin",
    "Product Family": "Cross-Tribe",
    Squad: "Content Strategy",
    Role: "Content",
    Skills: ""
  },
  {
    Employee: "Robert Sprague/Tampa/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Worknesh Belay/Armonk/IBM",
    Location: "Remote",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Lite, Language"
  },
  {
    Employee: "Nathan R Cerf/New York/IBM",
    Location: "New York",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Simeon Mcaleer/New York/IBM",
    Location: "Austin",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - JIA+"
  },
  {
    Employee: "Zachariah Eslami/US/IBM",
    Location: "New York",
    "Product Family": "Customer Projects",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - PREM"
  },
  {
    Employee: "Marc Teerlink/Washington/IBM",
    Location: "Remote",
    "Product Family": "Discovery",
    Squad: "C&C App",
    Role: "Manager",
    Skills: "OM-Lead"
  },
  {
    Employee: "Donna Romer/US/IBM",
    Location: "New York",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: "OM - Lead"
  },
  {
    Employee: "Andrew F Boyd/Dublin/IBM",
    Location: "Remote",
    "Product Family": "End to End",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Salil Ahuja/Austin/IBM",
    Location: "Austin",
    "Product Family": "Discovery",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Sabtain Khan/Rochester/IBM",
    Location: "New York",
    "Product Family": "End to End",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "John M Meyers/New York/IBM",
    Location: "New York",
    "Product Family": "End to End",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Nathan Robinson/Austin/IBM",
    Location: "Austin",
    "Product Family": "End to End",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Nathan Robinson/Austin/IBM",
    Location: "Austin",
    "Product Family": "End to End",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - BI"
  },
  {
    Employee: "Luke Palamara/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Luke Palamara/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Luke Palamara/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Phil Anderson/US/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Iqbal Bakhsh/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Iqbal Bakhsh/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - BI"
  },
  {
    Employee: "Iqbal Bakhsh/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Deepika Devarajan/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM - Lead"
  },
  {
    Employee: "Deepika Devarajan/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM - Lead"
  },
  {
    Employee: "Deepika Devarajan/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM - Lead"
  },
  {
    Employee: "Anish Mathur/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Technical"
  },
  {
    Employee: "John M Pecorari/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Technical"
  },
  {
    Employee: "Fariya Syed-ali/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Fariya Syed-ali/New York/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - BI"
  },
  {
    Employee: "Joe Scherping/US/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Joe Scherping/US/IBM",
    Location: "New York",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - BI"
  },
  {
    Employee: "Mudita Singhal/US/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Technical"
  },
  {
    Employee: "Stefan Tzanev/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Stefan Tzanev/Pittsburgh/IBM",
    Location: "Pittsburgh",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Technical"
  },
  {
    Employee: "Pavan Tummala/US/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "",
    Location: "",
    "Product Family": "",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "",
    Location: "",
    "Product Family": "",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Pavan Tummala/US/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM - Technical"
  },
  {
    Employee: "",
    Location: "",
    "Product Family": "",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "",
    Location: "",
    "Product Family": "",
    Squad: "",
    Role: "",
    Skills: ""
  },
  {
    Employee: "Brian Loveys/Ottawa/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Shantenu R Agarwal/New York/IBM",
    Location: "New York",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Manager",
    Skills: "OM"
  },
  {
    Employee: "Oscar D Kafati/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Cross-Cutting (Convo)",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Oscar D Kafati/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Dialog Squad (Convo)",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Gavin Loughridge/New York/IBM",
    Location: "Austin",
    "Product Family": "Conversation",
    Squad: "Improve (Convo)",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Mitch Mason/San Francisco/IBM",
    Location: "Almaden",
    "Product Family": "Conversation",
    Squad: "Developer (Convo)",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Chris Desmarais/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Provisioning Squad (Convo)",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Chris Desmarais/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "End-to-end (Convo)",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Tammy T Lew/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Digital Enablement (Convo)",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Karen A Verelley/Watson/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "Migration (Convo)",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: " Jenny Salgado/US/IBM",
    Location: "Cambridge",
    "Product Family": "Conversation",
    Squad: "Chatops (Convo)",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: " Jenny Salgado/US/IBM",
    Location: "Cambridge",
    "Product Family": "Cross-Tribe",
    Squad: "TJBots",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Adam Benvie/US/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Metrics / Analytics (Convo)",
    Role: "Offering Manager",
    Skills: "OM - BI"
  },
  {
    Employee: "Blake McGregor/Austin/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Customer Care",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Carolyn Duncan/Atlanta/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Carolyn Duncan/Atlanta/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Brian Leffler/New York/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "User Interface (WVA)",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Brian Leffler/New York/IBM",
    Location: "Remote",
    "Product Family": "Conversation",
    Squad: "GTM (WVA)",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Vincent D Nguyen/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "GTM (WVA)",
    Role: "Offering Manager",
    Skills: "OM - GTM"
  },
  {
    Employee: "Katelyn Rothney/New York/IBM",
    Location: "New York",
    "Product Family": "Conversation",
    Squad: "Content (WVA)",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Alyssa Simpson/San Francisco/IBM",
    Location: "San Francisco",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Alyssa Simpson/San Francisco/IBM",
    Location: "San Francisco",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: "Alyssa Simpson/San Francisco/IBM",
    Location: "San Francisco",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Manager",
    Skills: "OM - Lead"
  },
  {
    Employee: " b saffo/US/IBM",
    Location: "New York",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Kevin Gong/New York/IBM",
    Location: "New York",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Bhavik Shah/Chicago/IBM",
    Location: "Remote",
    "Product Family": "Signal Services",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Ruchir Puri/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Jeff Eisen/Westford/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Stephen Fink/Watson/IBM",
    Location: "Yorktown",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Robert Yates/Cambridge/IBM",
    Location: "Littleton",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Shivakumar Vaithyanathan/Almaden/IBM",
    Location: "Almaden",
    "Product Family": "Discovery",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Rashida A Hodge/Raleigh/IBM",
    Location: "Raleigh",
    "Product Family": "Embed",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Christopher Guerin/Austin/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Molly S Hartwick/Austin/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Offering Manager",
    Skills: "OM"
  },
  {
    Employee: "Sridhar Sudarsan/Austin/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Executive",
    Skills: "OM"
  },
  {
    Employee: "Devin Alexander Conley/US/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Lakshminarayanan Krishnamurthy/Austin/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Iain McCown/US/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Developer",
    Skills: "Front-end"
  },
  {
    Employee: "Niyati Parameswaran/San Francisco/IBM",
    Location: "Almaden",
    "Product Family": "Embed",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Priscilla S Moraes/Austin/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Developer",
    Skills: ""
  },
  {
    Employee: "Abhishek Shrivastava7/US/IBM",
    Location: "Austin",
    "Product Family": "Embed",
    Squad: "",
    Role: "Developer",
    Skills: "Full Stack"
  },
  {
    Employee: "Alan L Foster/Dallas/IBM",
    Location: "Remote",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  },
  {
    Employee: "Jonas E Nwuke/New York/IBM",
    Location: "New York",
    "Product Family": "Cross-Tribe",
    Squad: "",
    Role: "Executive",
    Skills: ""
  }
];

export default data;
