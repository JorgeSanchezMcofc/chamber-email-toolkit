import { useState } from "react";

const CHAMBER_BLUE = "#003DA5";

const PROGRAMS = [
  {
    id: "1mc",
    name: "1 Million Cups (1MC)",
    category: "Entrepreneurship",
    stats: "9 Sessions | 15 Speakers | 203 Attendees",
    blurb: "1 Million Cups is a free weekly program hosted by the McAllen Chamber of Commerce that connects entrepreneurs with the local community over coffee. Founders present their businesses, get real feedback, and build meaningful relationships with mentors, investors, and fellow business owners. With 203 attendees across 9 sessions this year, 1MC McAllen is one of the most active entrepreneur gatherings in the Rio Grande Valley.",
    tags: ["free", "networking", "entrepreneurs"],
  },
  {
    id: "latina-hope",
    name: "Latina Hope",
    category: "Entrepreneurship",
    stats: "6 Sessions | 210 Attendees",
    blurb: "Latina Hope is a hands-on empowerment program for women entrepreneurs in the Rio Grande Valley. Participants attend business workshops and product-skills training, then pitch their ideas for funding — with winners receiving up to $956 in seed money to launch or grow their microbusiness. With 210 attendees across 6 sessions, Latina Hope is creating a new generation of RGV businesswomen.",
    tags: ["women", "funding", "microbusiness"],
  },
  {
    id: "itx",
    name: "Innovation Texas (ITX)",
    category: "Entrepreneurship",
    stats: "Accelerator Program — 3 Phases",
    blurb: "Innovation Texas (ITX) is an accelerator program that guides entrepreneurs through three structured phases of growth: Discover, Incubation, and Acceleration. Participants receive education, mentorship, and connections to capital as they move their ideas from concept to market. ITX is the McAllen Chamber's flagship program for founders ready to scale.",
    tags: ["accelerator", "mentorship", "capital"],
  },
  {
    id: "satop",
    name: "SATOP",
    category: "Entrepreneurship",
    stats: "Up to 40 Free Hours of Technical Assistance",
    blurb: "The Space Alliance Technology Outreach Program (SATOP) provides Texas-based small businesses with up to 40 hours of free technical assistance. Engineering students from Texas A&M University design custom solutions and develop academic prototypes for real-world challenges — at no cost to the business owner. It's one of the most underutilized free resources available to McAllen entrepreneurs.",
    tags: ["free", "technical", "Texas A&M"],
  },
  {
    id: "bizcon",
    name: "Business Consulting",
    category: "Entrepreneurship",
    stats: "60 Consulting Sessions Annually",
    blurb: "The McAllen Chamber offers free personalized business consulting to help entrepreneurs at every stage — from concept to launch to growth. Services include business planning, market strategy, and customized roadmaps. With 60 sessions delivered this year, our consulting program has become a trusted first stop for local and international founders establishing themselves in the RGV.",
    tags: ["consulting", "planning", "free"],
  },
  {
    id: "sizeup",
    name: "SizeUp Business Intelligence Tools",
    category: "Entrepreneurship",
    stats: "675 Active Users | 295 New Users | 901 Sessions",
    blurb: "SizeUp is a data-driven platform available to McAllen Chamber members that provides market research, competitive analysis, and industry-specific insights across 50+ guided topics. With 675 active users and 901 logged sessions, it is one of our most-used member resources for entrepreneurs who want to make smarter decisions backed by real data.",
    tags: ["data", "research", "market"],
  },
  {
    id: "virtual-offices",
    name: "Virtual Offices",
    category: "Entrepreneurship",
    stats: "4 Offices | $3,450 Revenue",
    blurb: "The McAllen Chamber's Virtual Office program gives businesses a professional registered address at the McAllen Creative Incubator — complete with a local phone line and mailing services — allowing entrepreneurs to operate from anywhere in the world. It is an ideal solution for startups, remote businesses, and international entrepreneurs establishing a McAllen presence.",
    tags: ["office", "address", "incubator"],
  },
  {
    id: "linkup",
    name: "Link-Up: Speed Networking",
    category: "Membership",
    stats: "10 Events | 644 Attendees | 55–75 per session",
    blurb: "Link-Up: Speed Networking is the McAllen Chamber's monthly event designed to help members grow their contact list fast. With 55 to 75 attendees per session and 644 total attendees this year, Link-Up gives business owners a structured, energetic format to promote their work, develop leads, and build professional relationships in a single morning.",
    tags: ["networking", "leads", "monthly"],
  },
  {
    id: "goodday",
    name: "Good Day McAllen Luncheon",
    category: "Membership",
    stats: "4 Events | 1,031 Attendees",
    blurb: "The Good Day McAllen Luncheon is one of the Chamber's most beloved membership events, welcoming new members and giving current members a chance to connect and promote their businesses. With over 1,031 attendees across four quarterly events this year, it remains the premier midday networking experience in McAllen.",
    tags: ["luncheon", "members", "quarterly"],
  },
  {
    id: "goodmorning",
    name: "Good Morning McAllen Breakfast",
    category: "Membership",
    stats: "4 Events | 545 Attendees",
    blurb: "Good Morning McAllen is a quarterly breakfast bringing together business community members for networking, idea sharing, and collaboration. Open to members and non-members alike, each session is a forum for discussing industry trends, exchanging resources, and developing strategies to help businesses thrive — 545 attendees joined us across four events this year.",
    tags: ["breakfast", "networking", "quarterly"],
  },
  {
    id: "ribbon",
    name: "Ribbon Cuttings & Grand Openings",
    category: "Membership",
    stats: "118 Events | 6,733 Attendees",
    blurb: "The McAllen Chamber's Ambassador team celebrated 118 ribbon cuttings, grand openings, and ground-breaking ceremonies this year, welcoming 6,733 community members to support new and growing businesses. These events are among the most visible ways the Chamber promotes its members — and a powerful first impression for any business joining our community.",
    tags: ["celebration", "new business", "promotion"],
  },
  {
    id: "cashmob",
    name: "Cash Mob",
    category: "Membership",
    stats: "11 Events | 218 Attendees | $7,000 Economic Impact",
    blurb: "Cash Mob is a monthly event where Chamber members gather at a designated local business and spend at least $20 on-site, generating direct economic impact. With 11 events, 218 attendees, and $7,000 in documented economic impact this year, Cash Mob is a simple, effective way the Chamber puts its membership to work for local small businesses.",
    tags: ["local", "spending", "monthly"],
  },
  {
    id: "mixers",
    name: "Small Business Mixers",
    category: "Membership",
    stats: "4 Quarterly Events",
    blurb: "Small Business Mixers are quarterly after-hours networking events hosted by the McAllen Chamber, bringing together entrepreneurs, business professionals, and community leaders in a relaxed social setting. These events are designed to foster the kind of genuine professional relationships that drive long-term business growth in McAllen.",
    tags: ["after-hours", "networking", "social"],
  },
  {
    id: "ofrenda",
    name: "McAllen Remembers: Ofrenda Comunitaria",
    category: "Membership",
    stats: "50 Attendees | Dia de los Muertos",
    blurb: "McAllen Remembers: Ofrenda Comunitaria is a Dia de los Muertos community tribute honoring individuals who have been champions of business, economic development, culture, and the arts in our city. This heartfelt event reflects the McAllen Chamber's deep roots in the bicultural identity of the Rio Grande Valley.",
    tags: ["culture", "community", "heritage"],
  },
  {
    id: "fizz",
    name: "Holiday Open House: Fizz the Season",
    category: "Membership",
    stats: "200 Attendees | 12 Vendors",
    blurb: "Fizz the Season is the McAllen Chamber's festive end-of-year open house, celebrating a year of connection and collaboration with 200 guests and 12 local vendors. The event features seasonal shopping, local entertainment, and the community spirit that defines McAllen — making it a perfect opportunity for member businesses to close the year with visibility and goodwill.",
    tags: ["holiday", "vendors", "members"],
  },
  {
    id: "manyow",
    name: "Man & Woman of the Year Awards",
    category: "Signature Events",
    stats: "Annual Gala | 400 Attendees",
    blurb: "The Annual Man and Woman of the Year Awards Gala is the McAllen Chamber's flagship signature event, honoring two individuals for exemplary service and volunteerism benefiting the City of McAllen. The formal dinner, live auction, and 400-person attendance make it the most prestigious business recognition event in the Rio Grande Valley.",
    tags: ["gala", "awards", "annual"],
  },
  {
    id: "golf",
    name: "Mayor's Cup Golf Tournament",
    category: "Signature Events",
    stats: "44 Teams | 18-Hole Florida Scramble",
    blurb: "The Mayor's Cup Golf Tournament is an annual 18-hole Florida Scramble limited to 44 teams, featuring raffle prizes and a dinner reception awards ceremony. It is one of the McAllen Chamber's most popular member events and a top sponsorship opportunity for businesses looking to connect with civic and business leaders in a premier setting.",
    tags: ["golf", "tournament", "sponsorship"],
  },
  {
    id: "christmas",
    name: "Christmas in the Park",
    category: "Signature Events",
    stats: "20 Marketplace Vendors | 26 Food Vendors",
    blurb: "Christmas in the Park is the McAllen Chamber's two-day holiday celebration launching the McAllen Holiday Parade, featuring local marching bands, giant helium balloons, celebrity hosts, an artisan market, food vendors, and carnival rides. With 20 marketplace vendors and 26 food vendors, it is one of the most visible small business showcases in the RGV holiday season.",
    tags: ["holiday", "family", "vendors"],
  },
  {
    id: "legendary",
    name: "Legendary McAllen Women",
    category: "Leadership",
    stats: "8 Honorees | 400 Attendees",
    blurb: "Legendary McAllen Women is an annual celebration recognizing trailblazing women who have shaped McAllen through leadership, innovation, and service. With 8 honorees and 400 attendees, this event has become one of the Chamber's most anticipated of the year — inspiring the next generation of women business leaders in the Rio Grande Valley.",
    tags: ["women", "awards", "annual"],
  },
  {
    id: "admin-lunch",
    name: "Administrative Professionals Day Luncheon",
    category: "Leadership",
    stats: "328 Attendees | 12 Women-Owned Vendors",
    blurb: "The Administrative Professionals Day Luncheon honors the invaluable contributions of administrative professionals across McAllen's workplaces. The event features 12 women-owned Chamber member vendors and draws 328 attendees — making it both a recognition moment and a meaningful platform for women-owned businesses in our community.",
    tags: ["recognition", "women", "professionals"],
  },
  {
    id: "magazine",
    name: "McAllen Woman Magazine",
    category: "Leadership",
    stats: "2,000 Issues | 29 Women Profiled",
    blurb: "McAllen Woman Magazine is a Chamber publication celebrating women-owned businesses and profiling influential McAllen leaders shaping the city's economic and entrepreneurial landscape. Each issue features 8 Legendary Women, 10 Women Shaping the Future, and 11 Women Breaking Boundaries — 2,000 issues distributed across the community.",
    tags: ["publication", "women", "media"],
  },
  {
    id: "podcast",
    name: "Chamber Podcast",
    category: "Leadership",
    stats: "Ongoing Series",
    blurb: "The McAllen Chamber of Commerce Podcast shares practical advice, success stories, and insights from local business and community leaders. Each episode explores growth, innovation, and leadership while connecting listeners to Chamber programs and resources — an accessible, on-demand way to stay plugged into the McAllen business community.",
    tags: ["podcast", "media", "storytelling"],
  },
  {
    id: "mxlan",
    name: "MXLAN Economic Summit",
    category: "Economic Development",
    stats: "Annual Summit — Border Region Focus",
    blurb: "The MXLAN Economic Summit is a premier annual gathering that brings together industry leaders, policymakers, and experts to discuss cross-border trade, economic growth, and the unique role the McAllen-Reynosa region plays in national and global markets. It is the defining economic conversation of the border — and a must-attend for any organization working in binational business.",
    tags: ["binational", "trade", "summit"],
  },
  {
    id: "jumpstart",
    name: "Jumpstart Career Expo",
    category: "Economic Development",
    stats: "6,500+ Jobs Available Annually",
    blurb: "The Jumpstart Career Expo is the McAllen area's largest annual job fair, connecting employers in health care, government, construction, hospitality, retail, and administrative support with thousands of job seekers. Attendees can apply for more than 6,500 positions on-site, receive resume support, and get professional headshots — all in one day.",
    tags: ["jobs", "workforce", "employers"],
  },
  {
    id: "trade-talks",
    name: "Trade Talks",
    category: "Economic Development",
    stats: "Quarterly Roundtables",
    blurb: "Trade Talks is a quarterly roundtable series hosted by the McAllen Chamber that brings together industry leaders, policy experts, and regional stakeholders to discuss trade, logistics, and binational collaboration. It is the go-to forum for organizations engaged in cross-border commerce and international business development in South Texas.",
    tags: ["trade", "logistics", "binational"],
  },
  {
    id: "econ-pulse",
    name: "Monthly Economic Pulse Report",
    category: "Economic Development",
    stats: "Monthly Report | 3,000-Issue Annual Magazine",
    blurb: "The McAllen Chamber's Monthly Economic Pulse Report delivers key data and analysis on the trends shaping the region's business climate and long-term growth. Paired with a 3,000-issue annual magazine featuring expert commentary on workforce development and industry performance, it is the most comprehensive economic intelligence resource available for McAllen businesses.",
    tags: ["data", "research", "publication"],
  },
  {
    id: "coli",
    name: "Cost of Living Index (COLI)",
    category: "Economic Development",
    stats: "Updated 3x Annually",
    blurb: "The McAllen Chamber publishes the Cost of Living Index three times per year, tracking and comparing the cost of living across metro areas nationwide — including housing, groceries, utilities, healthcare, and transportation. It is a trusted resource for businesses, site selectors, and residents evaluating McAllen's competitive advantage as a place to live and operate.",
    tags: ["data", "index", "research"],
  },
  {
    id: "site-selector",
    name: "Site Selector Event",
    category: "Economic Development",
    stats: "Annual Targeted Engagement",
    blurb: "The McAllen Chamber's Site Selector Event hosts national site selectors and corporate consultants for a firsthand look at McAllen's strategic advantages, infrastructure, and workforce assets. It is one of the most direct tools the Chamber uses to attract new business investment and corporate expansion to the Rio Grande Valley.",
    tags: ["investment", "expansion", "business attraction"],
  },
  {
    id: "industry-picnic",
    name: "Industry Picnic",
    category: "Economic Development",
    stats: "Annual Appreciation Event",
    blurb: "The Industry Picnic is an annual appreciation event celebrating McAllen's industrial employers and workforce, fostering connection between local companies, MEDC leadership, and community partners. It reflects the McAllen Chamber's commitment to recognizing the manufacturers and industry leaders who anchor our regional economy.",
    tags: ["industry", "workforce", "appreciation"],
  },
  {
    id: "coo",
    name: "Certificates of Origin",
    category: "International Trade",
    stats: "765 Certificates Issued | $13,663 Revenue",
    blurb: "The McAllen Chamber issues Certificates of Origin that verify the country of manufacture for exported goods — an essential trade document for international commerce. With 765 certificates issued this year, this service is a critical resource for McAllen's active export community and businesses engaged in cross-border trade with Mexico.",
    tags: ["export", "trade", "compliance"],
  },
  {
    id: "market-main",
    name: "Market on Main",
    category: "Culture & Tourism",
    stats: "7 Events | 910 Attendees | 226 Vendors",
    blurb: "Market on Main is a monthly art and culture event at the McAllen Creative Incubator featuring local and regional artists, artisans, and student creators alongside live music and workshops. With 226 vendors and 910 attendees across 7 events, it is one of the most vibrant small business platforms in the Rio Grande Valley's creative economy.",
    tags: ["art", "culture", "vendors"],
  },
  {
    id: "taste-mcallen",
    name: "Taste McAllen",
    category: "Culture & Tourism",
    stats: "Annual Signature Food Festival",
    blurb: "Taste McAllen is the Chamber's signature annual food festival showcasing the city's diverse culinary scene. Local chefs, food trucks, and restaurants present their best dishes and cocktails, giving participating businesses expanded visibility and a direct connection to food enthusiasts from across the region.",
    tags: ["food", "festival", "culinary"],
  },
  {
    id: "foodie-tour",
    name: "Foodie Tour",
    category: "Culture & Tourism",
    stats: "Citywide Media Campaign",
    blurb: "The Foodie Tour is a citywide Chamber campaign highlighting McAllen's best Chamber-member restaurants through coordinated media outreach. Participating establishments gain expanded visibility and the opportunity to attract new audiences — making it one of the most cost-effective marketing opportunities available to food and beverage businesses in the region.",
    tags: ["restaurants", "campaign", "media"],
  },
  {
    id: "shop-hop",
    name: "Shop Hop",
    category: "Culture & Tourism",
    stats: "Interactive Retail Promotion",
    blurb: "Shop Hop is an interactive retail promotion that connects Chamber-member stores and boutiques through themed shopping experiences, raffles, and social media engagement. Designed to drive foot traffic and community participation, it strengthens McAllen's shop-local culture and puts member retailers in front of an engaged citywide audience.",
    tags: ["retail", "local", "shopping"],
  },
  {
    id: "fit-fall",
    name: "Fit for Fall Tour",
    category: "Culture & Tourism",
    stats: "Seasonal Wellness Campaign",
    blurb: "The Fit for Fall Tour is a seasonal Chamber campaign spotlighting member businesses in the fitness, wellness, and healthy dining sectors. Through featured promotions, classes, and experiences, the campaign connects health-conscious McAllen residents with local businesses — and positions the city as a community where wellbeing and commerce thrive together.",
    tags: ["wellness", "fitness", "campaign"],
  },
  {
    id: "holiday-shopping",
    name: "Holiday Shopping Tour",
    category: "Culture & Tourism",
    stats: "Multi-Channel Holiday Campaign",
    blurb: "The Holiday Shopping Tour is the McAllen Chamber's flagship holiday retail campaign, driving local and visitor spending through coordinated TV, radio, social media, print, and outdoor advertising for member retailers, boutiques, and restaurants. It is the highest-visibility marketing opportunity the Chamber offers to member businesses each year.",
    tags: ["holiday", "retail", "campaign"],
  },
  {
    id: "bbq",
    name: "Sizzling in the Tropics BBQ Cookoff",
    category: "Culture & Tourism",
    stats: "310 Attendees | 15 BBQ Teams",
    blurb: "Sizzling in the Tropics BBQ Cookoff is an annual South Texas barbecue competition where 15 teams compete for Showmanship and People's Choice awards across categories including brisket, ribs, pulled pork, and pan de campo. With 310 attendees, it is a beloved community event that celebrates McAllen's culture and creates direct foot traffic for participating vendors.",
    tags: ["food", "competition", "community"],
  },
  {
    id: "whiskey",
    name: "Whiskey Business",
    category: "Culture & Tourism",
    stats: "Annual Tasting Event",
    blurb: "Whiskey Business is an elevated annual tasting event featuring premium whiskeys, live music, and culinary pairings from member restaurants. It brings together McAllen's food and entertainment community in a sophisticated social setting — and gives participating restaurants direct access to an engaged, high-energy audience.",
    tags: ["food", "entertainment", "members"],
  },
  {
    id: "tourism-week",
    name: "National Travel & Tourism Week",
    category: "Culture & Tourism",
    stats: "3 Events | 92 Attendees",
    blurb: "Held each May, National Travel and Tourism Week is a Chamber-hosted series recognizing the economic impact of tourism on McAllen. Visit McAllen leads a series of events honoring professionals in the convention, hospitality, and special events industries — celebrating the partners who make McAllen a premier destination for visitors and business travelers alike.",
    tags: ["tourism", "hospitality", "recognition"],
  },
  {
    id: "govaffairs",
    name: "Government Affairs Series",
    category: "Government",
    stats: "3 Events: Crime Report | Legislative Wrap-Up | City Manager Update",
    blurb: "The Government Affairs Series is a three-event speaker series connecting elected officials, city administrators, and decision-makers directly with McAllen's business community. Each session provides timely updates on public safety, legislation, and city priorities — giving Chamber members a direct line to the policies and decisions shaping McAllen's growth.",
    tags: ["policy", "government", "advocacy"],
  },
  {
    id: "dc-day",
    name: "McAllen Day in Washington D.C.",
    category: "Government",
    stats: "Annual | 119th U.S. Congress",
    blurb: "McAllen Day in Washington D.C. gives Chamber members and business leaders direct access to U.S. Senators, Representatives, and federal agency officials to advocate for local priorities — including economic development, infrastructure, tax policy, and regulatory reform. It is the Chamber's most powerful tool for ensuring McAllen's voice is heard at the national level.",
    tags: ["federal", "advocacy", "lobbying"],
  },
  {
    id: "hospitality-taskforce",
    name: "McAllen Hospitality Task Force",
    category: "Visit McAllen",
    stats: "7 Events | 135 Attendees | 6 Speakers",
    blurb: "The McAllen Hospitality Task Force is a collaborative forum where hospitality professionals address industry challenges, share insights, and strengthen partnerships. With 7 events and 135 attendees this year, it plays a central role in elevating McAllen's hospitality standards and shaping the visitor experience that drives our tourism economy.",
    tags: ["hospitality", "tourism", "networking"],
  },
  {
    id: "meetings-conventions",
    name: "Sales — Meetings & Conventions",
    category: "Visit McAllen",
    stats: "30 Events | 15,174 Attendees | $5.59M Economic Impact",
    blurb: "Visit McAllen's Meetings and Conventions sales team attracted 30 conferences and business events this year, generating 7,995 hotel room nights and $5,591,075 in direct economic impact for McAllen. This program is a core driver of the city's hospitality economy and a primary reason McAllen remains a preferred destination for regional and national organizations.",
    tags: ["conventions", "tourism", "economic impact"],
  },
  {
    id: "sports-events",
    name: "Sales — Sports Events",
    category: "Visit McAllen",
    stats: "12 Events | 29,300 Attendees | $15.9M Economic Impact",
    blurb: "Visit McAllen's Sports Events program brought 12 tournaments and sporting events to the city this year, drawing 29,300 attendees, generating 11,300 hotel room nights, and producing $15,907,500 in economic impact. McAllen's world-class sports facilities and warm climate make it one of the most competitive sports tourism destinations in South Texas.",
    tags: ["sports", "tourism", "economic impact"],
  },
  {
    id: "scan-save",
    name: "Scan & Save Visitor Discount Program",
    category: "Visit McAllen",
    stats: "Citywide QR Code Initiative",
    blurb: "Scan and Save is a citywide QR code program connecting local businesses with visitors attending conventions, tournaments, and leisure events in McAllen. Accessible through participating hotels and registration sites, it drives direct foot traffic and spending to Chamber-member establishments from the thousands of visitors McAllen welcomes each year.",
    tags: ["tourism", "discounts", "visitors"],
  },
  {
    id: "hospitality-training",
    name: "Hospitality Training Certification Program",
    category: "Visit McAllen",
    stats: "UTRGV Partnership",
    blurb: "Developed with the UTRGV Hospitality and Tourism Department, this certification program equips local hospitality employees with customer service, communication, and visitor experience skills. It directly supports McAllen's reputation as a welcoming destination and helps member businesses in the hospitality sector build and retain a high-quality workforce.",
    tags: ["training", "hospitality", "workforce"],
  },
  {
    id: "rgv-lead",
    name: "RGV Lead LMI Initiative",
    category: "Workforce",
    stats: "Labor Market Intelligence Partnership",
    blurb: "The RGV Lead Labor Market Information Initiative is a partnership between the McAllen Chamber and RGV LEAD to analyze workforce data and align educational programs with current and emerging industry demands. It ensures McAllen's talent pipeline stays connected to the real needs of our regional employers.",
    tags: ["workforce", "data", "education"],
  },
  {
    id: "home-to-texas",
    name: "Home to Texas Internship Initiative",
    category: "Workforce",
    stats: "University of Texas Partnership",
    blurb: "The Home to Texas Internship Initiative brings college students back to the Rio Grande Valley for summer internships with local employers, building connections that encourage future talent retention in McAllen. It is a direct investment in the next generation of RGV business leaders and a meaningful way for Chamber members to contribute to long-term workforce development.",
    tags: ["internships", "workforce", "students"],
  },
  {
    id: "region-one",
    name: "Region One PACE Program",
    category: "Workforce",
    stats: "Region One ESC Collaboration",
    blurb: "The Region One PACE Program is a collaboration with Region One Education Service Center promoting career pathways and experiential learning for high school students interested in STEM, business, and manufacturing. The McAllen Chamber's involvement connects young talent directly to the employers and industries that will define the RGV's future economy.",
    tags: ["workforce", "youth", "STEM"],
  },
  {
    id: "alls",
    name: "Administrative Lunch & Learn Series (ALLS)",
    category: "Workforce",
    stats: "5 Sessions | 62 Attendees",
    blurb: "The Administrative Lunch and Learn Series (ALLS) is a professional development program for administrative professionals focused on productivity, communication, technology, management, and personal growth. With 5 sessions and 62 attendees this year, ALLS fills a genuine gap for the operational backbone of McAllen's businesses.",
    tags: ["professional development", "admin", "training"],
  },
];

const CATEGORIES = [...new Set(PROGRAMS.map(p => p.category))];

const CATEGORY_COLORS = {
  "Entrepreneurship":    { bg: "#EBF3FF", text: "#003DA5", border: "#B8D0F5" },
  "Membership":          { bg: "#FFF8E8", text: "#7A5200", border: "#F5D98A" },
  "Signature Events":    { bg: "#F0EBF9", text: "#4A1D7A", border: "#C9B3E8" },
  "Leadership":          { bg: "#FFF0F3", text: "#831430", border: "#F5B8C6" },
  "Economic Development":{ bg: "#E8F9F3", text: "#0A5C3E", border: "#9EE2C8" },
  "International Trade": { bg: "#FFF3E8", text: "#7A3500", border: "#F5C4A0" },
  "Culture & Tourism":   { bg: "#E8F5FF", text: "#0A4A7A", border: "#9DCFED" },
  "Government":          { bg: "#F5F5F5", text: "#444444", border: "#CCCCCC" },
  "Visit McAllen":       { bg: "#F0FDF4", text: "#065F46", border: "#A7F3D0" },
  "Workforce":           { bg: "#FEF9EC", text: "#854D0E", border: "#FDE68A" },
};

const STORAGE_KEY_DIR    = "chamber_directory_v1";
const STORAGE_KEY_GRANTS = "chamber_grants_v1";

const DEFAULT_DIRECTORY = [
  { id: 1, name: "LiftFund RGV", category: "Capital & Finance", description: "Microlending, small business loans, and Women's Business Accelerator for RGV entrepreneurs.", contact: "Marlene R. Rodriguez", title: "Market Director", email: "mrodriguez@liftfund.com", phone: "", website: "liftfund.com", freeConsult: true },
  { id: 2, name: "South Texas SBDC (UTRGV)", category: "General Business", description: "Free business advising, training, and access to capital for Hidalgo County entrepreneurs.", contact: "Maria D. Juarez-Serna", title: "Executive Director", email: "Maria.Juarez@utrgv.edu", phone: "956-665-7535", website: "utrgv.edu/sbdc", freeConsult: true },
  { id: 3, name: "SCORE South Texas", category: "General Business", description: "Free one-on-one mentoring and workshops on business planning, marketing, and finance.", contact: "Chapter Contact", title: "Volunteer Mentor", email: "info@scoresgv.org", phone: "", website: "score.org/riograndevalley", freeConsult: true },
  { id: 4, name: "UTRGV Legal Clinic", category: "Legal", description: "Free legal consultations for small businesses and entrepreneurs in the Rio Grande Valley.", contact: "Clinic Coordinator", title: "Staff Attorney", email: "legalclinic@utrgv.edu", phone: "", website: "utrgv.edu", freeConsult: true },
  { id: 5, name: "Accion Opportunity Fund", category: "Capital & Finance", description: "Leading nonprofit small business lender with bilingual English/Spanish support.", contact: "General Inquiries", title: "Loan Officer", email: "info@aofund.org", phone: "", website: "aofund.org", freeConsult: true },
];

const DEFAULT_GRANTS = [
  { id: 1, name: "Latina Hope Seed Grant", provider: "McAllen Chamber of Commerce", amount: "Up to $956", deadline: "Rolling — program cohorts", category: "Women Entrepreneurs", description: "Seed funding for women entrepreneurs who complete the Latina Hope workshops and pitch competition.", eligibility: "Women entrepreneurs in the RGV; must complete program", link: "mcallenchamber.com/latina-hope", status: "Active" },
  { id: 2, name: "SBA 7(a) Small Business Loans", provider: "U.S. Small Business Administration", amount: "Up to $5M", deadline: "Ongoing", category: "General Business", description: "The most common SBA loan program providing financial assistance for businesses with special requirements.", eligibility: "For-profit small businesses meeting SBA size standards", link: "sba.gov", status: "Active" },
  { id: 3, name: "Texas Enterprise Fund", provider: "Texas Governor's Office", amount: "Varies by project", deadline: "Project-based", category: "Economic Development", description: "A deal-closing fund to attract new businesses and retain and create jobs in Texas.", eligibility: "Businesses creating 75+ jobs; negotiated case-by-case", link: "governor.texas.gov/tef", status: "Active" },
  { id: 4, name: "USDA Rural Business Development Grant", provider: "USDA Rural Development", amount: "$10K-$500K", deadline: "Check USDA website", category: "Rural Business", description: "Grants supporting technical and financial assistance to small emerging rural businesses.", eligibility: "Rural nonprofits and public bodies assisting small businesses", link: "rd.usda.gov", status: "Active" },
];

const SERVICE_CATEGORIES = ["Legal", "HR", "Accounting", "Business Formation", "IP / Intellectual Property", "Capital & Finance", "General Business"];

function useStorage(key, defaultVal) {
  const [val, setVal] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : defaultVal; }
    catch { return defaultVal; }
  });
  const save = (v) => { setVal(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} };
  return [val, save];
}

// ─── BLURB STACK ──────────────────────────────────────────────────────────────
function BlurbStack({ stack, onRemove, onReorder, onClear }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const intro = `Hi [Name],\n\nI wanted to share a few McAllen Chamber of Commerce programs that may be a good fit for you:\n\n`;
    const body = stack.map(item => `${item.name}\n${item.blurb}`).join("\n\n");
    const closing = `\n\nPlease don't hesitate to reach out if you'd like more information on any of these. We'd love to connect.\n\nWarm regards,\n[Your Name]\nMcAllen Chamber of Commerce`;
    navigator.clipboard.writeText(intro + body + closing);
    setCopied("email");
    setTimeout(() => setCopied(false), 2500);
  };

  const copyBlurbs = () => {
    const text = stack.map(item => `${item.name}\n${item.blurb}`).join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied("blurbs");
    setTimeout(() => setCopied(false), 2500);
  };

  if (stack.length === 0) return (
    <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "28px 20px", textAlign: "center", background: "var(--color-background-secondary)" }}>
      <i className="ti ti-stack-2" style={{ fontSize: 36, color: "var(--color-text-tertiary)", display: "block", marginBottom: 10 }} aria-hidden="true" />
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
        Your stack is empty.<br />
        Click <strong>Add to stack</strong> on any program card.
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
        <button onClick={copyEmail} style={{ flex: 1, padding: "8px 10px", background: CHAMBER_BLUE, color: "white", border: "none", borderRadius: "var(--border-radius-md)", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <i className="ti ti-mail" style={{ fontSize: 14 }} aria-hidden="true" />
          {copied === "email" ? "Copied!" : "Copy as email"}
        </button>
        <button onClick={copyBlurbs} style={{ flex: 1, padding: "8px 10px", background: "transparent", color: CHAMBER_BLUE, border: `0.5px solid ${CHAMBER_BLUE}`, borderRadius: "var(--border-radius-md)", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <i className="ti ti-copy" style={{ fontSize: 14 }} aria-hidden="true" />
          {copied === "blurbs" ? "Copied!" : "Copy blurbs only"}
        </button>
      </div>
      <button onClick={onClear} style={{ padding: "5px", background: "transparent", color: "var(--color-text-tertiary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-md)", fontSize: 11, cursor: "pointer", fontFamily: "var(--font-sans)" }}>
        Clear all ({stack.length})
      </button>

      <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "10px 12px", fontSize: 11, color: "var(--color-text-secondary)", lineHeight: 1.6, fontFamily: "var(--font-mono)", maxHeight: 100, overflow: "auto", borderLeft: `3px solid ${CHAMBER_BLUE}` }}>
        {stack.map((item, i) => (
          <div key={item.id} style={{ marginBottom: i < stack.length - 1 ? 6 : 0 }}>
            <span style={{ color: CHAMBER_BLUE, fontWeight: 500 }}>{item.name}</span><br />
            <span>{item.blurb.slice(0, 80)}...</span>
          </div>
        ))}
      </div>

      {stack.map((item, idx) => (
        <div key={item.id} style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-md)", padding: "10px 12px", background: "var(--color-background-primary)", display: "flex", gap: 8, alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, flexShrink: 0 }}>
            <button onClick={() => onReorder(idx, idx - 1)} disabled={idx === 0} style={{ background: "none", border: "none", cursor: idx === 0 ? "default" : "pointer", opacity: idx === 0 ? 0.25 : 0.7, padding: "1px 3px", color: "var(--color-text-secondary)" }}>
              <i className="ti ti-chevron-up" style={{ fontSize: 13 }} aria-hidden="true" />
            </button>
            <button onClick={() => onReorder(idx, idx + 1)} disabled={idx === stack.length - 1} style={{ background: "none", border: "none", cursor: idx === stack.length - 1 ? "default" : "pointer", opacity: idx === stack.length - 1 ? 0.25 : 0.7, padding: "1px 3px", color: "var(--color-text-secondary)" }}>
              <i className="ti ti-chevron-down" style={{ fontSize: 13 }} aria-hidden="true" />
            </button>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 500, fontSize: 12, color: "var(--color-text-primary)", marginBottom: 3 }}>{item.name}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{item.blurb.slice(0, 100)}...</div>
          </div>
          <button onClick={() => onRemove(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-tertiary)", padding: "1px 3px", flexShrink: 0 }}>
            <i className="ti ti-x" style={{ fontSize: 15 }} aria-hidden="true" />
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── PROGRAM CARD ─────────────────────────────────────────────────────────────
function ProgramCard({ prog, inStack, onAddToStack, onRemoveFromStack }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const colors = CATEGORY_COLORS[prog.category] || CATEGORY_COLORS["Government"];

  const copyOne = () => {
    navigator.clipboard.writeText(`${prog.name}\n${prog.blurb}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ border: `0.5px solid ${inStack ? CHAMBER_BLUE : "var(--color-border-tertiary)"}`, borderRadius: "var(--border-radius-lg)", background: "var(--color-background-primary)", overflow: "hidden", transition: "border-color 0.2s" }}>
      {/* Header — always visible */}
      <div style={{ padding: "14px 16px", cursor: "pointer" }} onClick={() => setExpanded(e => !e)}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)", marginBottom: 5, lineHeight: 1.3 }}>{prog.name}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: colors.bg, color: colors.text, border: `0.5px solid ${colors.border}` }}>{prog.category}</span>
              {inStack && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: "#EBF3FF", color: CHAMBER_BLUE, border: `0.5px solid #B8D0F5` }}>In stack</span>}
            </div>
          </div>
          <i className={`ti ti-chevron-${expanded ? "up" : "down"}`} style={{ fontSize: 16, color: "var(--color-text-tertiary)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
        </div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)", marginTop: 6 }}>{prog.stats}</div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "12px 14px", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.75, borderLeft: `3px solid ${CHAMBER_BLUE}` }}>
            {prog.blurb}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {prog.tags.map(t => <span key={t} style={{ fontSize: 11, padding: "2px 7px", borderRadius: 20, background: "var(--color-background-secondary)", color: "var(--color-text-secondary)", border: "0.5px solid var(--color-border-tertiary)" }}>{t}</span>)}
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {!inStack
              ? <button onClick={() => onAddToStack(prog.id)} style={{ flex: 1, padding: "8px 10px", border: `0.5px solid ${CHAMBER_BLUE}`, borderRadius: "var(--border-radius-md)", background: CHAMBER_BLUE, color: "white", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <i className="ti ti-stack-2" style={{ fontSize: 14 }} aria-hidden="true" /> Add to stack
                </button>
              : <button onClick={() => onRemoveFromStack(prog.id)} style={{ flex: 1, padding: "8px 10px", border: "0.5px solid var(--color-border-secondary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: "var(--color-text-secondary)", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <i className="ti ti-stack-pop" style={{ fontSize: 14 }} aria-hidden="true" /> Remove from stack
                </button>
            }
            <button onClick={copyOne} style={{ padding: "8px 14px", border: "0.5px solid var(--color-border-secondary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: copied ? "#0A5C3E" : "var(--color-text-secondary)", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)" }}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── DIRECTORY TAB ────────────────────────────────────────────────────────────
function DirectoryTab() {
  const [entries, setEntries] = useStorage(STORAGE_KEY_DIR, DEFAULT_DIRECTORY);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: "", category: "General Business", description: "", contact: "", title: "", email: "", phone: "", website: "", freeConsult: true });

  const cats = ["All", ...SERVICE_CATEGORIES];
  const filtered = entries.filter(e => (filter === "All" || e.category === filter) && (!search || [e.name, e.description, e.contact].join(" ").toLowerCase().includes(search.toLowerCase())));
  const openAdd = () => { setForm({ name: "", category: "General Business", description: "", contact: "", title: "", email: "", phone: "", website: "", freeConsult: true }); setModal("add"); };
  const openEdit = (e) => { setForm({ ...e }); setModal("edit"); };
  const save = () => { if (!form.name) return; if (modal === "add") setEntries([...entries, { ...form, id: Date.now() }]); else setEntries(entries.map(e => e.id === form.id ? form : e)); setModal(null); };
  const del = (id) => { if (window.confirm("Remove this entry?")) setEntries(entries.filter(e => e.id !== id)); };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search directory..." style={{ flex: 1, minWidth: 180 }} />
        <button onClick={openAdd} style={{ padding: "8px 16px", background: CHAMBER_BLUE, color: "white", border: "none", borderRadius: "var(--border-radius-md)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)" }}>+ Add Partner</button>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {cats.map(c => <button key={c} onClick={() => setFilter(c)} style={{ padding: "4px 12px", borderRadius: 20, border: `0.5px solid ${filter === c ? CHAMBER_BLUE : "var(--color-border-secondary)"}`, background: filter === c ? CHAMBER_BLUE : "transparent", color: filter === c ? "white" : "var(--color-text-secondary)", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)" }}>{c}</button>)}
      </div>
      {filtered.length === 0 && <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--color-text-secondary)", fontSize: 13 }}>No results found.</div>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
        {filtered.map(e => (
          <div key={e.id} style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "16px", background: "var(--color-background-primary)", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)" }}>{e.name}</div>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "var(--color-background-info)", color: "var(--color-text-info)", marginTop: 4, display: "inline-block" }}>{e.category}</span>
              </div>
              {e.freeConsult && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: "#E8F9F3", color: "#0A5C3E", border: "0.5px solid #9EE2C8", flexShrink: 0 }}>Free consult</span>}
            </div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{e.description}</div>
            <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 8, display: "flex", flexDirection: "column", gap: 3 }}>
              {e.contact && <div style={{ fontSize: 12 }}><span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{e.contact}</span>{e.title ? ` — ${e.title}` : ""}</div>}
              {e.email && <a href={`mailto:${e.email}`} style={{ fontSize: 12, color: CHAMBER_BLUE, textDecoration: "none" }}>{e.email}</a>}
              {e.phone && <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{e.phone}</div>}
              {e.website && <a href={`https://${e.website}`} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "var(--color-text-secondary)", textDecoration: "none" }}>{e.website} <i className="ti ti-external-link" style={{ fontSize: 11 }} /></a>}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => openEdit(e)} style={{ flex: 1, padding: "6px", border: "0.5px solid var(--color-border-secondary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: "var(--color-text-secondary)", fontSize: 12, cursor: "pointer" }}>Edit</button>
              <button onClick={() => del(e.id)} style={{ flex: 1, padding: "6px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: "var(--color-text-danger)", fontSize: 12, cursor: "pointer" }}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div style={{ background: "var(--color-background-primary)", borderRadius: "var(--border-radius-xl)", padding: 24, maxWidth: 500, width: "100%", border: "0.5px solid var(--color-border-secondary)", display: "flex", flexDirection: "column", gap: 12, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ fontWeight: 500, fontSize: 16 }}>{modal === "add" ? "Add Professional Partner" : "Edit Partner"}</div>
            {[["name","Organization Name *"],["contact","Contact Name"],["title","Title / Role"],["email","Email"],["phone","Phone"],["website","Website"]].map(([k,lbl]) => (
              <div key={k}><label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>{lbl}</label><input value={form[k]||""} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} /></div>
            ))}
            <div><label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>Category</label>
              <select value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))}>{SERVICE_CATEGORIES.map(c=><option key={c}>{c}</option>)}</select>
            </div>
            <div><label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>Description</label><textarea value={form.description||""} onChange={e=>setForm(f=>({...f,description:e.target.value}))} style={{ minHeight: 70 }} /></div>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13 }}><input type="checkbox" checked={form.freeConsult} onChange={e=>setForm(f=>({...f,freeConsult:e.target.checked}))} />Offers free initial consultation</label>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button onClick={()=>setModal(null)} style={{ padding: "8px 16px", border: "0.5px solid var(--color-border-secondary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: "var(--color-text-secondary)", cursor: "pointer", fontSize: 13 }}>Cancel</button>
              <button onClick={save} style={{ padding: "8px 20px", background: CHAMBER_BLUE, color: "white", border: "none", borderRadius: "var(--border-radius-md)", cursor: "pointer", fontSize: 13 }}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── GRANTS TAB ───────────────────────────────────────────────────────────────
function GrantsTab() {
  const [grants, setGrants] = useStorage(STORAGE_KEY_GRANTS, DEFAULT_GRANTS);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name:"", provider:"", amount:"", deadline:"", category:"General Business", description:"", eligibility:"", link:"", status:"Active" });

  const filtered = grants.filter(g => !search || [g.name,g.provider,g.description].join(" ").toLowerCase().includes(search.toLowerCase()));
  const openAdd = () => { setForm({ name:"",provider:"",amount:"",deadline:"",category:"General Business",description:"",eligibility:"",link:"",status:"Active" }); setModal("add"); };
  const openEdit = g => { setForm({...g}); setModal("edit"); };
  const save = () => { if (!form.name) return; if (modal==="add") setGrants([...grants,{...form,id:Date.now()}]); else setGrants(grants.map(g=>g.id===form.id?form:g)); setModal(null); };
  const del = id => { if (window.confirm("Remove this grant?")) setGrants(grants.filter(g=>g.id!==id)); };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search grants..." style={{ flex: 1 }} />
        <button onClick={openAdd} style={{ padding: "8px 16px", background: CHAMBER_BLUE, color: "white", border: "none", borderRadius: "var(--border-radius-md)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)" }}>+ Add Grant</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map(g => (
          <div key={g.id} style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "18px 20px", background: "var(--color-background-primary)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 15, color: "var(--color-text-primary)", marginBottom: 3 }}>{g.name}</div>
                <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8 }}>{g.provider}</div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: CHAMBER_BLUE }}>{g.amount}</span>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: g.status==="Active"?"#E8F9F3":"#FFF0F0", color: g.status==="Active"?"#0A5C3E":"#831430", border: `0.5px solid ${g.status==="Active"?"#9EE2C8":"#F5B8C6"}` }}>{g.status}</span>
              </div>
            </div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 8 }}><strong>Deadline:</strong> {g.deadline} &nbsp;|&nbsp; <strong>Category:</strong> {g.category}</div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: g.eligibility ? 8 : 0 }}>{g.description}</div>
            {g.eligibility && <div style={{ fontSize: 12, color: "var(--color-text-secondary)", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "7px 11px", marginBottom: 10 }}><strong>Eligibility:</strong> {g.eligibility}</div>}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {g.link && <a href={g.link.startsWith("http")?g.link:`https://${g.link}`} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: CHAMBER_BLUE, textDecoration: "none" }}>View grant <i className="ti ti-external-link" style={{ fontSize: 11 }} /></a>}
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <button onClick={()=>openEdit(g)} style={{ padding: "5px 12px", border: "0.5px solid var(--color-border-secondary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: "var(--color-text-secondary)", fontSize: 12, cursor: "pointer" }}>Edit</button>
                <button onClick={()=>del(g.id)} style={{ padding: "5px 12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: "var(--color-text-danger)", fontSize: 12, cursor: "pointer" }}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={e=>e.target===e.currentTarget&&setModal(null)}>
          <div style={{ background: "var(--color-background-primary)", borderRadius: "var(--border-radius-xl)", padding: 24, maxWidth: 520, width: "100%", border: "0.5px solid var(--color-border-secondary)", display: "flex", flexDirection: "column", gap: 12, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ fontWeight: 500, fontSize: 16 }}>{modal==="add"?"Add Grant":"Edit Grant"}</div>
            {[["name","Grant Name *"],["provider","Provider *"],["amount","Amount"],["deadline","Deadline"],["eligibility","Eligibility"],["link","URL"]].map(([k,lbl]) => (
              <div key={k}><label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>{lbl}</label><input value={form[k]||""} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} /></div>
            ))}
            <div><label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>Status</label>
              <select value={form.status||"Active"} onChange={e=>setForm(f=>({...f,status:e.target.value}))}>{["Active","Closed","Coming Soon"].map(o=><option key={o}>{o}</option>)}</select>
            </div>
            <div><label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>Description</label><textarea value={form.description||""} onChange={e=>setForm(f=>({...f,description:e.target.value}))} style={{ minHeight: 70 }} /></div>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button onClick={()=>setModal(null)} style={{ padding: "8px 16px", border: "0.5px solid var(--color-border-secondary)", borderRadius: "var(--border-radius-md)", background: "transparent", color: "var(--color-text-secondary)", cursor: "pointer", fontSize: 13 }}>Cancel</button>
              <button onClick={save} style={{ padding: "8px 20px", background: CHAMBER_BLUE, color: "white", border: "none", borderRadius: "var(--border-radius-md)", cursor: "pointer", fontSize: 13 }}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ATTACHMENTS TAB ──────────────────────────────────────────────────────────
function AttachmentsTab() {
  const ATTACHMENTS_URL = "https://drive.google.com";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "28px 24px", background: "var(--color-background-primary)", textAlign: "center" }}>
        <i className="ti ti-folder-open" style={{ fontSize: 48, color: CHAMBER_BLUE, display: "block", marginBottom: 12 }} aria-hidden="true" />
        <div style={{ fontWeight: 500, fontSize: 18, color: "var(--color-text-primary)", marginBottom: 8 }}>Email Attachments Library</div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: 380, margin: "0 auto 20px" }}>Program one-pagers, membership kits, event flyers, and sponsorship decks — all in one folder.</div>
        <a href={ATTACHMENTS_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", background: CHAMBER_BLUE, color: "white", borderRadius: "var(--border-radius-md)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-sans)" }}>
          <i className="ti ti-brand-google-drive" style={{ fontSize: 18 }} aria-hidden="true" />
          Open Attachments Folder
        </a>
        <div style={{ marginTop: 14, fontSize: 12, color: "var(--color-text-tertiary)" }}>To update this link: change <code>ATTACHMENTS_URL</code> in <code>AttachmentsTab</code> inside App.jsx</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
        {[{l:"Membership Kit",i:"ti-file-text",d:"New member welcome packet"},{l:"Program One-Pagers",i:"ti-layout-list",d:"Individual program summaries"},{l:"Event Flyers",i:"ti-calendar-event",d:"Upcoming event promotions"},{l:"Sponsorship Decks",i:"ti-presentation",d:"Sponsor opportunity packages"},{l:"Media Logos",i:"ti-photo",d:"Chamber logo files"},{l:"Annual Report",i:"ti-chart-bar",d:"Year-end impact report"}].map(a => (
          <div key={a.l} style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-md)", padding: "14px 16px", background: "var(--color-background-primary)", display: "flex", alignItems: "flex-start", gap: 12 }}>
            <i className={`ti ${a.i}`} style={{ fontSize: 22, color: CHAMBER_BLUE, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
            <div>
              <div style={{ fontWeight: 500, fontSize: 13, color: "var(--color-text-primary)", marginBottom: 2 }}>{a.l}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{a.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab]           = useState("templates");
  const [catFilter, setCatFilter] = useState("All");
  const [search, setSearch]     = useState("");
  const [stack, setStack]       = useState([]);
  const [showStack, setShowStack] = useState(false);

  const TABS = [
    { id: "templates",   label: "Email Templates", icon: "ti-mail" },
    { id: "attachments", label: "Attachments",      icon: "ti-paperclip" },
    { id: "directory",   label: "Pro Services",     icon: "ti-building" },
    { id: "grants",      label: "Grants",           icon: "ti-cash" },
  ];

  const filtered = PROGRAMS.filter(p =>
    (catFilter === "All" || p.category === catFilter) &&
    (!search || p.name.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  const addToStack = (id) => {
    const prog = PROGRAMS.find(p => p.id === id);
    if (!prog || stack.find(s => s.id === id)) return;
    setStack(prev => [...prev, { id: prog.id, name: prog.name, blurb: prog.blurb }]);
    setShowStack(true);
  };

  const removeFromStack = (id) => setStack(prev => prev.filter(s => s.id !== id));

  const reorderStack = (from, to) => {
    if (to < 0 || to >= stack.length) return;
    const next = [...stack];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    setStack(next);
  };

  const stackIds = new Set(stack.map(s => s.id));

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 980, margin: "0 auto", padding: "1.5rem 1rem" }}>
      <h2 className="sr-only">McAllen Chamber of Commerce Email Toolkit</h2>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ width: 40, height: 40, background: CHAMBER_BLUE, borderRadius: "var(--border-radius-md)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <i className="ti ti-building-community" style={{ fontSize: 22, color: "white" }} aria-hidden="true" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: 18, color: "var(--color-text-primary)" }}>McAllen Chamber Email Toolkit</div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>FY 25-26 Programs &amp; Resources</div>
        </div>
        {tab === "templates" && (
          <button onClick={() => setShowStack(s => !s)} style={{ padding: "8px 14px", border: `0.5px solid ${stack.length > 0 ? CHAMBER_BLUE : "var(--color-border-secondary)"}`, borderRadius: "var(--border-radius-md)", background: stack.length > 0 ? "#EBF3FF" : "transparent", color: stack.length > 0 ? CHAMBER_BLUE : "var(--color-text-secondary)", fontSize: 13, cursor: "pointer", fontFamily: "var(--font-sans)", display: "flex", alignItems: "center", gap: 7 }}>
            <i className="ti ti-stack-2" style={{ fontSize: 16 }} aria-hidden="true" />
            Blurb stack {stack.length > 0 ? `(${stack.length})` : ""}
          </button>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-lg)", padding: 4 }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, padding: "9px 8px", border: "none", borderRadius: "var(--border-radius-md)", background: tab === t.id ? "var(--color-background-primary)" : "transparent", color: tab === t.id ? "var(--color-text-primary)" : "var(--color-text-secondary)", fontSize: 13, cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: tab === t.id ? 500 : 400, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, boxShadow: tab === t.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
            <i className={`ti ${t.icon}`} style={{ fontSize: 16 }} aria-hidden="true" />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "templates" && (
        <div style={{ display: "grid", gridTemplateColumns: showStack ? "1fr 320px" : "1fr", gap: 20, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search programs..." style={{ flex: 1, minWidth: 200 }} />
              <select value={catFilter} onChange={e => setCatFilter(e.target.value)}>
                <option value="All">All categories</option>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["All", ...CATEGORIES].map(c => (
                <button key={c} onClick={() => setCatFilter(c)} style={{ padding: "4px 12px", borderRadius: 20, border: `0.5px solid ${catFilter === c ? CHAMBER_BLUE : "var(--color-border-secondary)"}`, background: catFilter === c ? CHAMBER_BLUE : "transparent", color: catFilter === c ? "white" : "var(--color-text-secondary)", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)" }}>{c}</button>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
              {filtered.length} programs — click any card to expand and add to your stack.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
              {filtered.map(p => (
                <ProgramCard key={p.id} prog={p} inStack={stackIds.has(p.id)} onAddToStack={addToStack} onRemoveFromStack={removeFromStack} />
              ))}
            </div>
          </div>

          {showStack && (
            <div style={{ position: "sticky", top: 16 }}>
              <div style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <i className="ti ti-stack-2" style={{ fontSize: 16, color: CHAMBER_BLUE }} aria-hidden="true" />
                Blurb Stack
              </div>
              <BlurbStack stack={stack} onRemove={removeFromStack} onReorder={reorderStack} onClear={() => setStack([])} />
            </div>
          )}
        </div>
      )}

      {tab === "attachments" && <AttachmentsTab />}
      {tab === "directory"   && <DirectoryTab />}
      {tab === "grants"      && <GrantsTab />}
    </div>
  );
}
