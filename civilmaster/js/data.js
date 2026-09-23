// ==========================================
// CIVIL MASTER - MOCK DATA
// ==========================================
// This file contains mock data for frontend simulation
// Replace with real API calls when backend is ready

const SUBJECTS_DATA = [
    {
        id: 1,
        name: 'Structural Engineering',
        description: 'Learn about structural analysis, design, and mechanics',
        icon: 'bi-building',
        resourceCount: 45
    },
    {
        id: 2,
        name: 'Geotechnical Engineering',
        description: 'Study soil mechanics, foundations, and earth structures',
        icon: 'bi-layers',
        resourceCount: 38
    },
    {
        id: 3,
        name: 'Transportation Engineering',
        description: 'Explore road design, traffic engineering, and transportation systems',
        icon: 'bi-car-front',
        resourceCount: 32
    },
    {
        id: 4,
        name: 'Hydraulics',
        description: 'Understand fluid mechanics and hydraulic systems',
        icon: 'bi-droplet',
        resourceCount: 29
    },
    {
        id: 5,
        name: 'Surveying',
        description: 'Master land surveying techniques and measurements',
        icon: 'bi-geo-alt',
        resourceCount: 41
    },
    {
        id: 6,
        name: 'Construction Technology',
        description: 'Learn construction methods and project management',
        icon: 'bi-tools',
        resourceCount: 35
    },
    {
        id: 7,
        name: 'Building Materials',
        description: 'Study properties and applications of construction materials',
        icon: 'bi-bricks',
        resourceCount: 28
    },
    {
        id: 8,
        name: 'Engineering Mathematics',
        description: 'Mathematical foundations for engineering applications',
        icon: 'bi-calculator',
        resourceCount: 52
    },
    {
        id: 9,
        name: 'Environmental Engineering',
        description: 'Environmental systems and sustainable engineering',
        icon: 'bi-tree',
        resourceCount: 25
    },
    {
        id: 10,
        name: 'Fluid Mechanics',
        description: 'Study fluid behavior and fluid dynamics',
        icon: 'bi-water',
        resourceCount: 31
    },
    {
        id: 11,
        name: 'Soil Mechanics',
        description: 'Understand soil properties and geotechnical analysis',
        icon: 'bi-diagram-3',
        resourceCount: 36
    },
    {
        id: 12,
        name: 'Reinforced Concrete',
        description: 'Learn concrete design and reinforced structures',
        icon: 'bi-grid-3x3',
        resourceCount: 40
    }
];

const VIDEOS_DATA = [
    {
        id: 1,
        title: 'Introduction to Structural Analysis',
        category: 'Structural Engineering',
        description: 'Learn the basics of structural analysis and how forces affect structures.',
        duration: '15:30',
        thumbnail: 'assets/images/videos/video-1-placeholder.svg',
        url: 'https://www.youtube.com/watch?v=JElWylkzpNo'
    },
    {
        id: 2,
        title: 'Soil Mechanics Fundamentals',
        category: 'Geotechnical Engineering',
        description: 'Understanding soil properties and their importance in construction.',
        duration: '20:45',
        thumbnail: 'assets/images/videos/video-2-placeholder.svg',
        url: 'https://www.youtube.com/watch?v=g6x3eSLsJBs'
    },
    {
        id: 3,
        title: 'Concrete Mix Design Explained',
        category: 'Building Materials',
        description: 'Step-by-step guide to designing concrete mixes for different applications.',
        duration: '18:20',
        thumbnail: 'assets/images/videos/video-3-placeholder.svg',
        url: 'https://www.youtube.com/watch?v=hTtF9xogdkI'
    },
    {
        id: 4,
        title: 'Surveying Techniques for Beginners',
        category: 'Surveying',
        description: 'Learn essential surveying techniques and measurement methods.',
        duration: '22:10',
        thumbnail: 'assets/images/videos/video-4-placeholder.svg',
        url: 'https://www.youtube.com/watch?v=1TdkNBw42fw'
    },
    {
        id: 5,
        title: 'Fluid Dynamics in Civil Engineering',
        category: 'Fluid Mechanics',
        description: 'Understanding fluid flow principles in engineering applications.',
        duration: '16:55',
        thumbnail: 'assets/images/videos/video-5-placeholder.svg',
        url: 'https://www.youtube.com/watch?v=DcSNRBtpfuk'
    },
    {
        id: 6,
        title: 'Road Design Principles',
        category: 'Transportation Engineering',
        description: 'Learn the fundamentals of road and highway design.',
        duration: '25:00',
        thumbnail: 'assets/images/videos/video-6-placeholder.svg',
        url: 'https://www.youtube.com/watch?v=1X2NhZTUfLo'
    }
];

const PAST_QUESTIONS_DATA = [
    {
        id: 1,
        subject: 'Structural Engineering',
        year: 2023,
        questionCount: 25,
        topics: ['Beam Analysis', 'Truss Design', 'Frame Structures']
    },
    {
        id: 2,
        subject: 'Geotechnical Engineering',
        year: 2023,
        questionCount: 20,
        topics: ['Soil Classification', 'Foundation Design', 'Slope Stability']
    },
    {
        id: 3,
        subject: 'Fluid Mechanics',
        year: 2022,
        questionCount: 22,
        topics: ['Bernoulli Equation', 'Pipe Flow', 'Open Channel Flow']
    },
    {
        id: 4,
        subject: 'Surveying',
        year: 2023,
        questionCount: 18,
        topics: ['Leveling', 'Theodolite', 'GPS Surveying']
    }
];

const NOTES_DATA = [
    {
        id: 1,
        subject: 'Structural Engineering',
        topic: 'Beam Analysis',
        content: 'Comprehensive notes on beam analysis, including shear force and bending moment diagrams.',
        pageCount: 15
    },
    {
        id: 2,
        subject: 'Geotechnical Engineering',
        topic: 'Soil Classification',
        content: 'Detailed notes on soil classification systems and properties.',
        pageCount: 12
    },
    {
        id: 3,
        subject: 'Building Materials',
        topic: 'Concrete Technology',
        content: 'Notes on concrete composition, properties, and testing methods.',
        pageCount: 18
    },
    {
        id: 4,
        subject: 'Surveying',
        topic: 'Total Station',
        content: 'Guide to using total station for precise measurements.',
        pageCount: 10
    }
];

const TUTORIALS_DATA = [
    {
        id: 1,
        title: 'How to Draw Shear Force Diagrams',
        category: 'Structural Engineering',
        steps: 8,
        difficulty: 'Intermediate'
    },
    {
        id: 2,
        title: 'Calculating Bearing Capacity',
        category: 'Geotechnical Engineering',
        steps: 6,
        difficulty: 'Advanced'
    },
    {
        id: 3,
        title: 'Concrete Mix Design Procedure',
        category: 'Building Materials',
        steps: 10,
        difficulty: 'Intermediate'
    },
    {
        id: 4,
        title: 'Using Theodolite for Angle Measurement',
        category: 'Surveying',
        steps: 7,
        difficulty: 'Beginner'
    }
];

const PRACTICE_QUESTIONS_DATA = [
    {
        id: 1,
        question: 'What is the unit of stress?',
        options: ['N/m', 'N/m²', 'kg/m³', 'm/s²'],
        correctAnswer: 1,
        explanation: 'Stress is force per unit area, measured in N/m² (Pascal).'
    },
    {
        id: 2,
        question: 'Which test is used to determine the bearing capacity of soil?',
        options: ['Proctor test', 'Standard penetration test', 'Slump test', 'Compaction test'],
        correctAnswer: 1,
        explanation: 'Standard penetration test (SPT) is commonly used to determine bearing capacity.'
    },
    {
        id: 3,
        question: 'What is the standard size of a concrete cube?',
        options: ['100mm x 100mm x 100mm', '150mm x 150mm x 150mm', '200mm x 200mm x 200mm', '250mm x 250mm x 250mm'],
        correctAnswer: 1,
        explanation: 'The standard size of a concrete cube for compression testing is 150mm x 150mm x 150mm.'
    },
    {
        id: 4,
        question: 'Which instrument is used for measuring horizontal angles?',
        options: ['Level', 'Theodolite', 'Chain', 'Tape'],
        correctAnswer: 1,
        explanation: 'Theodolite is used for measuring both horizontal and vertical angles.'
    },
    {
        id: 5,
        question: 'What is the minimum grade of concrete for RCC work?',
        options: ['M15', 'M20', 'M25', 'M30'],
        correctAnswer: 1,
        explanation: 'M20 is the minimum grade of concrete recommended for RCC work as per IS code.'
    }
];

const AI_RESPONSES = {
    // Civil Master Information
    'what is civil master': 'Civil Master is an educational platform designed specifically for civil engineering students. It provides access to past examination questions, organized notes, step-by-step tutorials, video lessons, interactive practice questions, and an AI-powered learning assistant - all in one mobile application.',
    
    'purpose of civil master': 'The purpose of Civil Master is to help civil engineering students learn, practice, and succeed in their academic journey. It centralizes all learning resources in one place, making it easier for students to access study materials, practice with past questions, and get AI-powered assistance when needed.',
    
    'why was civil master created': 'Civil Master was created to address the challenge civil engineering students face in accessing quality learning resources. Many students struggle to find organized past questions, comprehensive notes, and tutorial videos. Civil Master solves this by providing a unified platform with all these resources, plus AI assistance, to help students prepare effectively for examinations.',
    
    'who can use civil master': 'Civil Master is designed for civil engineering students at all levels - from first-year students to final-year students preparing for graduation. It\'s particularly useful for university students preparing for semester examinations.',
    
    'how to use civil master': 'To use Civil Master, download the app from Google Play Store. Once installed, you can browse subjects, access past questions, read notes, watch tutorial videos, practice with quizzes, and use the AI assistant to get help with difficult concepts.',
    
    'is civil master free': 'Civil Master offers both free and premium content. Basic features like browsing subjects and some practice questions are free, while advanced features like detailed notes, video tutorials, and unlimited AI assistance may require a subscription.',
    
    'civil master features': 'Civil Master includes: 1) Past examination questions organized by subject and year, 2) Comprehensive study notes, 3) Step-by-step tutorials, 4) Video lessons, 5) Interactive practice quizzes, 6) AI-powered learning assistant, 7) Progress tracking, 8) Subject-specific resources.',
    
    'download civil master': 'You can download Civil Master from the Google Play Store. Search for "Civil Master" or use the download button on this website. The app is compatible with Android devices running Android 5.0 and above.',
    
    'civil master app': 'Civil Master is available as a mobile application on Android. It provides all learning resources in one convenient app, allowing you to study anywhere, anytime without needing multiple resources.',
    
    'civil master contact': 'You can contact Civil Master via WhatsApp at +237 651 588 585 or email at civilmaster237@gmail.com. We\'re also available on social media platforms like Facebook, Instagram, TikTok, LinkedIn, and YouTube.',
    
    'civil master support': 'For support, you can reach us through WhatsApp at +237 651 588 585 or email civilmaster237@gmail.com. We typically respond within 24 hours. You can also check our FAQ section for common questions.',
    
    'civil master agha': 'Civil Master is proudly developed under AGHA. AGHA is a technology company that develops innovative solutions including Civil Master, Talk Trade, Buea Market, and AGHA AI products.',
    
    'about agha': 'AGHA is a technology company focused on developing innovative digital solutions. Our products include Civil Master (civil engineering education), Talk Trade (trade communication), Buea Market (local marketplace), and AGHA AI (AI-powered solutions).',
    
    // Structural Engineering
    'explain reinforced concrete': 'Reinforced concrete is a composite material where concrete\'s high compressive strength is combined with steel reinforcement\'s high tensile strength. The steel bars (rebar) are placed in areas where tension occurs, typically at the bottom of beams and sides of columns. This combination allows structures to resist both compression and tension forces effectively.',
    
    'help with structural analysis': 'Structural analysis involves determining the effects of loads on physical structures and their components. Key concepts include: 1) Equilibrium equations (ΣF=0, ΣM=0), 2) Free body diagrams, 3) Shear force and bending moment diagrams, 4) Method of joints for trusses, 5) Moment distribution method. Would you like me to explain any specific method in detail?',
    
    'what is shear force': 'Shear force is the internal force that acts parallel to the cross-section of a structural member. It resists the sliding of one part of the material relative to another. In beams, shear force varies along the length and is calculated by summing vertical forces on one side of the section.',
    
    'what is bending moment': 'Bending moment is the internal moment that causes a structural member to bend. It\'s calculated as the product of force and the perpendicular distance from the point of interest to the line of action of the force. Bending moment diagrams help identify maximum moments for design.',
    
    'explain truss analysis': 'Truss analysis uses the method of joints or method of sections to determine forces in each member. Assumptions: 1) Members are connected by frictionless pins, 2) Loads act only at joints, 3) Members are two-force members (axial tension or compression only). Start with joints with ≤2 unknown forces.',
    
    'what is deflection': 'Deflection is the vertical displacement of a structural member under load. It\'s important to ensure deflection doesn\'t exceed allowable limits (typically L/250 for beams). Methods to calculate: 1) Double integration method, 2) Moment-area method, 3) Conjugate beam method, 4) Virtual work method. Excessive deflection can cause cracking, discomfort, or structural failure.',
    
    'explain beam design': 'Beam design involves determining the size and reinforcement to resist bending moment and shear force. Steps: 1) Calculate design moment (Mu = 1.2DL + 1.6LL), 2) Determine required depth based on span/depth ratio, 3) Calculate steel area (As = Mu/(0.87fy(d-d/2))), 4) Check for deflection, 5) Design shear reinforcement (stirrups). Follow IS 456 or ACI 318 codes.',
    
    'what is column design': 'Column design resists axial compression and bending. Types: short columns (no buckling), long columns (buckling critical). Design steps: 1) Calculate factored load (Pu), 2) Determine slenderness ratio (Le/r), 3) Calculate required area (Ag = Pu/(0.4fck)), 4) Provide longitudinal steel (0.8-4% of Ag), 5) Design lateral ties. Eccentricity causes additional bending moment.',
    
    'explain moment distribution': 'Moment distribution is an iterative method for analyzing statically indeterminate structures. Steps: 1) Calculate fixed-end moments, 2) Determine distribution factors at each joint, 3) Distribute unbalanced moments, 4) Carry over moments to far ends, 5) Repeat until convergence. It\'s useful for continuous beams and frames.',
    
    'what is influence line': 'Influence lines show how a reaction, shear, or moment at a specific point varies as a unit load moves across the structure. Used for: 1) Determining maximum effects from moving loads, 2) Bridge design, 3) Crane runway design. The ordinate at any point equals the value of the function when unit load is at that point.',
    
    'explain plastic analysis': 'Plastic analysis considers the formation of plastic hinges when steel yields. Assumptions: 1) Material is perfectly elastic-plastic, 2) Small deformations, 3) Adequate ductility. Collapse load is reached when enough hinges form to create a mechanism. Used for steel structures to achieve more economical designs than elastic analysis.',
    
    'what is portal frame': 'Portal frames are rigid frame structures with columns and beams rigidly connected. They resist lateral loads through frame action. Types: pinned base, fixed base, gable frames. Analysis considers axial force, shear, and moment in all members. Used for industrial buildings, warehouses, and workshops.',
    
    'explain load combinations': 'Load combinations combine different loads with safety factors. Common combinations: 1) 1.4DL (dead load only), 2) 1.2DL + 1.6LL (dead + live), 3) 1.2DL + 1.6LL + 0.5WL (including wind), 4) 1.2DL + 1.0WL + 0.5LL (wind dominant). These ensure safety under various loading scenarios per design codes.',
    
    'what is factor of safety': 'Factor of safety (FOS) is the ratio of strength to actual stress. It accounts for uncertainties in material properties, loads, and analysis. Typical values: 1.5-2.0 for steel, 2.0-3.0 for concrete, 2.5-3.0 for soil. Higher FOS for critical structures or uncertain conditions. Modern LRFD uses load and resistance factors instead.',
    
    // Geotechnical Engineering
    'explain soil mechanics': 'Soil mechanics is the study of soil behavior under loading conditions. Important concepts include: 1) Soil classification (gravel, sand, silt, clay), 2) Permeability and seepage, 3) Effective stress principle, 4) Shear strength, 5) Consolidation and settlement. Understanding these helps in foundation design and slope stability analysis.',
    
    'what is bearing capacity': 'Bearing capacity is the maximum load per unit area that soil can support without failure. It depends on soil type, foundation dimensions, depth of foundation, and groundwater conditions. The standard penetration test (SPT) is commonly used to determine bearing capacity in the field.',
    
    'explain soil classification': 'Soil classification systems like USCS and AASHTO categorize soils based on grain size distribution and plasticity. Key groups: GW (well-graded gravel), GP (poorly graded gravel), SW (well-graded sand), SP (poorly graded sand), CL (low plasticity clay), CH (high plasticity clay). Classification helps predict engineering behavior.',
    
    'what is slope stability': 'Slope stability analysis determines whether a soil slope will remain stable or fail. Factors affecting stability: soil strength, slope angle, groundwater, external loads. Methods include: 1) Limit equilibrium (Bishop\'s method, Fellenius method), 2) Finite element analysis. Factor of safety >1.5 is typically required.',
    
    'explain foundation design': 'Foundation design involves selecting the appropriate foundation type (shallow or deep) based on soil conditions and structural loads. Shallow foundations include spread footings and mat foundations. Deep foundations include piles and drilled shafts. Key considerations: bearing capacity, settlement, and structural integrity.',
    
    'what is consolidation': 'Consolidation is the gradual compression of saturated soil under sustained load due to expulsion of pore water. It\'s time-dependent and significant in clay soils. Primary consolidation occurs as pore water pressure dissipates. Secondary consolidation (creep) continues after primary consolidation due to soil skeleton rearrangement. Terzaghi\'s theory is used for analysis.',
    
    'explain effective stress': 'Effective stress (σ\') is the stress carried by soil particles, calculated as σ\' = σ - u, where σ is total stress and u is pore water pressure. This fundamental principle states that soil strength and deformation depend on effective stress, not total stress. When water level rises, u increases, σ\' decreases, reducing soil strength.',
    
    'what is shear strength': 'Shear strength is the maximum shear stress soil can resist before failure. Coulomb\'s equation: τ = c + σ\'tanφ, where c is cohesion, φ is friction angle, and σ\' is effective stress. Clay soils have higher cohesion, sandy soils have higher friction angle. Shear strength is critical for slope stability, bearing capacity, and retaining wall design.',
    
    'explain permeability': 'Permeability is the ability of soil to transmit water. Darcy\'s law: q = kiA, where q is flow rate, k is permeability coefficient, i is hydraulic gradient, A is cross-sectional area. Gravel has high permeability (10⁻² to 10⁻⁴ m/s), clay has very low permeability (10⁻⁹ to 10⁻¹¹ m/s). Important for drainage, seepage, and dewatering.',
    
    'what is compaction': 'Compaction is the process of densifying soil by reducing air voids through mechanical energy. Proctor test determines optimum moisture content (OMC) and maximum dry density. Factors affecting compaction: moisture content, compaction effort, soil type. Well-compacted soil has higher strength, lower compressibility, and better load-bearing capacity.',
    
    'explain liquefaction': 'Liquefaction occurs when saturated loose sand loses strength and behaves like a liquid during dynamic loading (earthquakes). Caused by buildup of pore water pressure that reduces effective stress to zero. Mitigation: densification, drainage, or using deep foundations. Critical in seismic zones for loose sandy soils below water table.',
    
    'what is retaining wall': 'Retaining walls hold back soil at different elevations. Types: gravity walls, cantilever walls, counterfort walls, anchored walls. Design considers: earth pressure (active/passive), sliding, overturning, bearing capacity, and settlement. Coulomb or Rankine theory used for earth pressure calculations.',
    
    'explain earth pressure': 'Earth pressure is the lateral pressure exerted by soil on retaining structures. Three states: at-rest (K₀), active (Ka), passive (Kp). Active pressure occurs when wall moves away from soil, passive when wall moves toward soil. Rankine theory assumes smooth wall, Coulomb accounts for wall friction. Critical for retaining wall design.',
    
    'what is pile foundation': 'Pile foundations transfer loads to deeper, stronger soil layers when shallow soil is weak. Types: driven piles (displacement), bored piles (non-displacement). Load transfer: end bearing (tip resistance), skin friction (shaft resistance). Capacity determined from load tests or dynamic formulas. Used for heavy structures, weak surface soils, or high water table.',
    
    'explain settlement': 'Settlement is vertical deformation of soil under load. Types: immediate settlement (elastic), consolidation settlement (time-dependent in clay), secondary consolidation (creep). Total settlement must be within allowable limits (typically 25-50mm for buildings). Differential settlement causes structural damage. Calculated using elastic theory or consolidation theory.',
    
    'what is standard penetration test': 'Standard Penetration Test (SPT) measures soil resistance by driving a standard sampler into soil. N-value = blows per 300mm penetration. Used to: 1) Estimate soil density/strength, 2) Determine bearing capacity, 3) Classify soil, 4) Assess liquefaction potential. N < 10 = loose, 10-30 = medium, >30 = dense for sands.',
    
    'explain plate load test': 'Plate load test determines bearing capacity and settlement of soil in-situ. A steel plate (300-600mm) is loaded and settlement measured. Results extrapolated to actual foundation size using empirical relationships. Provides direct measurement of soil behavior but limited to shallow depths. Used for critical projects.',
    
    'what is geotechnical report': 'Geotechnical report summarizes subsurface investigation findings. Includes: 1) Soil profile and stratigraphy, 2) Soil properties (strength, compressibility), 3) Groundwater conditions, 4) Foundation recommendations, 5) Construction considerations. Essential for safe and economical foundation design. Required for most construction projects.',
    
    // Building Materials
    'what is concrete mix design': 'Concrete mix design determines the proportions of cement, water, aggregates, and admixtures to achieve required strength, workability, and durability. Key parameters: water-cement ratio (typically 0.4-0.6), aggregate size, slump value. The mix design follows standards like ACI or IS codes.',
    
    'explain concrete grades': 'Concrete grades indicate compressive strength in N/mm² at 28 days. Common grades: M15 (15 N/mm²) for non-structural, M20 (20 N/mm²) minimum for RCC, M25 (25 N/mm²) for important structures, M30+ for special structures. Higher grades require better quality control and more cement.',
    
    'what is slump test': 'The slump test measures concrete workability/freshness. A cone-shaped mold is filled with concrete, lifted, and the vertical drop (slump) is measured. Slump values: 0-25mm (no slump, stiff), 25-50mm (low workability), 50-100mm (medium), 100-150mm (high). Too high slump indicates excess water.',
    
    'explain cement types': 'Common cement types: OPC 43 (Ordinary Portland Cement - general purpose), OPC 53 (higher strength, faster construction), PPC (Portland Pozzolana Cement - better durability, slower strength gain), SRC (Sulfate Resisting Cement - for sulfate-rich soils). Selection depends on exposure conditions and requirements.',
    
    'what is steel reinforcement': 'Steel reinforcement (rebar) provides tensile strength to concrete. Common grades: Fe 415 (yield strength 415 N/mm²), Fe 500 (500 N/mm²), Fe 550 (550 N/mm²). Bars are available in diameters from 8mm to 32mm. Proper anchorage length and lap length are critical for structural integrity.',
    
    'explain aggregates': 'Aggregates occupy 70-80% of concrete volume. Types: fine aggregate (sand < 4.75mm), coarse aggregate (gravel > 4.75mm). Properties affect concrete: size, shape, texture, grading, strength, cleanliness. Well-graded aggregates reduce cement requirement and improve workability. Crushed stone provides better interlock than natural gravel.',
    
    'what is admixture': 'Admixtures are chemicals added to concrete to modify properties. Types: accelerators (speed setting), retarders (delay setting), plasticizers (improve workability), superplasticizers (high workability with low w/c), air-entraining (freeze-thaw resistance), waterproofing (reduce permeability). Used to achieve specific performance requirements.',
    
    'explain curing': 'Curing maintains moisture and temperature for concrete hydration. Methods: ponding, spraying, wet coverings, curing compounds. Duration: minimum 7 days for OPC, 10-14 days for PPC. Proper curing increases strength, reduces cracking, improves durability. Inadequate curing causes weak, porous concrete with reduced strength.',
    
    'what is concrete testing': 'Concrete testing ensures quality and compliance. Tests: slump (workability), compressive strength (cube/cylinder test at 7, 28 days), tensile strength (splitting test), flexural strength (beam test). Sampling: representative samples from each batch. Acceptance criteria specified in codes. Critical for structural safety.',
    
    'explain brick masonry': 'Brick masonry uses bricks bonded with mortar. Brick types: clay bricks, fly ash bricks, concrete bricks. Mortar proportions: 1:6 (cement:sand) for general, 1:4 for load-bearing. Properties: compressive strength, water absorption, efflorescence. Used for walls, partitions, foundations. Proper bonding and jointing essential for strength.',
    
    'what is timber': 'Timber is natural wood used in construction. Properties: strength, durability, workability. Defects: knots, shakes, checks. Classification based on strength: structural grade, non-structural. Used for: formwork, temporary structures, decorative elements. Requires treatment against termites, fungi, and fire.',
    
    'explain steel structures': 'Steel structures use steel members for construction. Advantages: high strength-to-weight ratio, speed of construction, flexibility. Disadvantages: corrosion, fire protection needed. Types: hot-rolled sections, built-up sections, cold-formed sections. Connections: bolted, welded. Design per IS 800 or AISC codes.',
    
    'what is corrosion': 'Corrosion is deterioration of metals due to electrochemical reaction with environment. In concrete, carbonation reduces pH, causing steel corrosion. Prevention: adequate cover, low w/c ratio, corrosion inhibitors, epoxy coating. In steel structures, use galvanization, paint, or stainless steel. Critical for durability and safety.',
    
    'explain durability': 'Durability is ability to resist environmental deterioration. Factors affecting concrete durability: w/c ratio, cement content, cover, exposure conditions. Exposure classes: mild, moderate, severe, extreme. Requirements: minimum cement content, maximum w/c ratio, cover thickness. Durable structures have longer service life and lower maintenance.',
    
    'what is non-destructive testing': 'Non-destructive testing (NDT) evaluates concrete without damage. Methods: rebound hammer (surface hardness), ultrasonic pulse velocity (internal quality), core drilling (strength), cover meter (reinforcement location). Used for: quality assessment, structure evaluation, forensic investigation. Complements destructive testing.',
    
    // Surveying
    'practice questions on surveying': 'Here are some practice questions on surveying:\n\n1. What is the principle of leveling?\n2. Differentiate between plane surveying and geodetic surveying.\n3. What is the purpose of a theodolite?\n4. Explain the concept of reciprocal leveling.\n5. What is GPS surveying and its advantages?\n\nWould you like detailed answers to any of these questions?',
    
    'what is theodolite': 'A theodolite is a precision instrument for measuring horizontal and vertical angles. It consists of a telescope mounted on two perpendicular axes (horizontal and vertical). Modern theodolites are digital and can measure distances too. Used for: setting out curves, measuring angles, establishing control points.',
    
    'explain leveling': 'Leveling determines the elevation of points relative to a datum. Principle: Horizontal line of sight through a level. Key components: dumpy level, auto level, leveling staff. Methods: differential leveling, profile leveling, reciprocal leveling. Used for: establishing benchmarks, contour mapping, construction layout.',
    
    'what is total station': 'A total station combines an electronic theodolite with an electronic distance meter (EDM). It can measure angles, distances, and coordinates simultaneously. Features: onboard computer for calculations, data storage, digital display. Advantages: fast, accurate, reduces human error, stores data for later processing.',
    
    'explain gps surveying': 'GPS (Global Positioning System) surveying uses satellites to determine positions. Advantages: works in any weather, no line of sight required between points, high accuracy, fast data collection. Applications: control surveys, mapping, deformation monitoring. Requires: GPS receiver, satellite visibility, clear sky view.',
    
    'what is chain surveying': 'Chain surveying is the simplest method of surveying using linear measurements. Equipment: chain/tape, arrows, ranging rods, pegs. Principle: triangulation - dividing area into triangles. Suitable for small, fairly level areas with simple boundaries. Limitations: not suitable for uneven terrain or large areas.',
    
    'explain compass surveying': 'Compass surveying uses magnetic compass to measure horizontal angles. Equipment: prismatic compass, ranging rods, chain. Used when theodolite not available or for reconnaissance. Affected by magnetic declination and local attraction. Less accurate than theodolite surveying but faster and simpler.',
    
    'what is traverse surveying': 'Traverse surveying is a method of establishing control points by measuring distances and angles between them. Types: open traverse (doesn\'t return to start), closed traverse (returns to start). Computations: latitude, departure, closure error, adjustment. Used for: control networks, topographic surveys, construction layout.',
    
    'explain contour surveying': 'Contour surveying maps elevation changes of terrain using contour lines (lines of equal elevation). Methods: direct (grid method), indirect (from spot heights). Contour interval depends on terrain and scale. Uses: topographic maps, earthwork calculations, drainage planning, site planning. Essential for engineering projects.',
    
    'what is tacheometry': 'Tacheometry is rapid surveying using stadia method to measure horizontal distance and elevation difference simultaneously. Uses a theodolite with stadia hairs and a leveling staff. Advantage: fast data collection in difficult terrain. Applications: topographic surveys, route surveys, where traditional leveling is impractical.',
    
    'explain photogrammetry': 'Photogrammetry uses photographs to measure and map features. Types: aerial (from aircraft/drone), terrestrial (ground-based). Modern: uses digital cameras and software. Applications: topographic mapping, as-built documentation, deformation monitoring. Advantages: covers large areas quickly, provides permanent record.',
    
    'what is remote sensing': 'Remote sensing collects data about Earth\'s surface without physical contact using satellites or aircraft. Sensors measure electromagnetic radiation. Applications: land use mapping, environmental monitoring, disaster assessment, urban planning. Provides synoptic view of large areas regularly.',
    
    'explain gis': 'Geographic Information System (GIS) captures, stores, analyzes, and displays spatial data. Components: hardware, software, data, people, procedures. Applications: urban planning, environmental management, transportation, utilities. Integrates various data layers for spatial analysis and decision-making.',
    
    'what is benchmark': 'Benchmark is a permanent reference point of known elevation. Types: GTS benchmark (national), permanent benchmark (major projects), temporary benchmark (survey work). Established by precise leveling. Used as reference for all elevation measurements in a project. Must be stable and accessible.',
    
    'explain errors in surveying': 'Surveying errors: systematic (consistent, correctable), random (unpredictable, follow normal distribution), mistakes (blunders, avoidable). Sources: instrument, personal, natural. Minimization: proper calibration, careful procedures, repeated measurements, error analysis. Accuracy vs precision concepts important.',
    
    // Fluid Mechanics
    'explain fluid mechanics': 'Fluid mechanics studies fluids (liquids and gases) at rest and in motion. Key concepts: 1) Properties (density, viscosity, specific gravity), 2) Hydrostatics (pressure in static fluids), 3) Fluid dynamics (Bernoulli equation, continuity equation), 4) Flow in pipes (laminar vs turbulent), 5) Open channel flow. Applications: pipe networks, hydraulic structures, pumps.',
    
    'what is bernoulli equation': 'Bernoulli equation relates pressure, velocity, and elevation in flowing fluids: P/ρg + v²/2g + z = constant. It assumes: steady flow, incompressible fluid, no friction, along a streamline. Applications: venturi meters, pitot tubes, flow through orifices. Real flows require correction factors for energy losses.',
    
    'explain pipe flow': 'Pipe flow can be laminar (Re < 2000) or turbulent (Re > 4000). Laminar flow has smooth streamlines; turbulent flow has mixing. Head loss due to friction: Darcy-Weisbach equation (hf = fLV²/2gD). Minor losses occur at fittings (valves, bends). Pipe networks use Hardy Cross method for analysis.',
    
    'what is open channel flow': 'Open channel flow occurs with a free surface (rivers, canals). Unlike pipe flow, pressure is atmospheric at the surface. Types: uniform flow (constant depth), gradually varied flow (gradual depth change), rapidly varied flow (sudden depth change like hydraulic jump). Manning\'s equation is commonly used for velocity calculation.',
    
    'explain viscosity': 'Viscosity is fluid\'s resistance to flow. Dynamic viscosity (μ) relates shear stress to velocity gradient. Kinematic viscosity (ν = μ/ρ) accounts for density. Water viscosity decreases with temperature; gases increase. Important for: pipe flow, pump selection, lubrication. Measured in poise or Pa·s for dynamic, stokes for kinematic.',
    
    'what is reynolds number': 'Reynolds number (Re = ρVD/μ) predicts flow regime. Re < 2000: laminar flow (smooth, predictable). Re > 4000: turbulent flow (mixing, chaotic). 2000-4000: transition. Used in: pipe design, heat transfer, aerodynamics. Higher Re means inertial forces dominate viscous forces.',
    
    'explain hydraulic jump': 'Hydraulic jump is sudden transition from supercritical to subcritical flow in open channels. Energy is dissipated through turbulence. Used for: energy dissipation below spillways, mixing chemicals, aeration. Sequ depth ratio depends on Froude number. Important for design of stilling basins and spillways.',
    
    'what is pump': 'Pumps add energy to fluids to move them. Types: centrifugal (rotodynamic), positive displacement (reciprocating, rotary). Centrifugal pumps: impeller adds kinetic energy, converted to pressure. Key parameters: flow rate (Q), head (H), power (P), efficiency (η). System curve vs pump curve determines operating point.',
    
    'explain venturi meter': 'Venturi meter measures flow rate in pipes using Bernoulli principle. Converging section increases velocity, decreases pressure. Pressure difference between inlet and throat relates to flow rate. Advantages: minimal head loss, accurate. Disadvantages: expensive, requires straight pipe upstream/downstream. Used in water supply, industrial applications.',
    
    'what is orifice': 'Orifice is an opening in tank or pipe through which fluid flows. Types: sharp-edged, rounded, submerged. Flow rate depends on: orifice area, head, discharge coefficient (Cd ≈ 0.6-0.65). Applications: flow measurement, tank discharge, irrigation. Orifice plate used as flow meter in pipes.',
    
    'explain notches and weirs': 'Notches and weirs measure flow in open channels. Notch: small opening in tank wall. Weir: obstruction across channel. Types: rectangular, triangular (V-notch), trapezoidal. Discharge depends on head, notch geometry, coefficient. Used in: irrigation canals, wastewater treatment, flow measurement.',
    
    'what is boundary layer': 'Boundary layer is thin layer near solid surface where viscous effects significant. Laminar boundary layer: smooth flow. Turbulent boundary layer: mixing. Separation occurs when adverse pressure gradient causes flow reversal. Important for: drag on objects, heat transfer, pipe entrance length. Reynolds number based on distance from leading edge.',
    
    'explain dimensional analysis': 'Dimensional analysis uses dimensions to relate physical quantities. Buckingham π theorem: n variables with k fundamental dimensions → n-k dimensionless π groups. Used for: model testing, similarity, deriving equations. Ensures dimensional consistency. Reduces experimental work by grouping variables.',
    
    'what is specific gravity': 'Specific gravity is ratio of fluid density to water density (at 4°C). Water SG = 1. SG > 1: denser than water (mercury = 13.6). SG < 1: lighter than water (oil = 0.8). Important for: buoyancy calculations, fluid identification, mixture design. Dimensionless quantity.',
    
    'explain manometry': 'Manometers measure pressure using fluid columns. Types: simple U-tube, differential, inclined. Pressure = ρgh where ρ is fluid density, g is gravity, h is column height. Advantages: simple, accurate. Disadvantages: limited range, fragile. Used for: calibrating instruments, low-pressure measurement.',
    
    // Transportation Engineering
    'explain road design': 'Road design involves geometric design and pavement design. Geometric design: alignment (horizontal and vertical curves), cross-section, sight distance. Pavement design: flexible (asphalt) or rigid (concrete). Key parameters: design speed, traffic volume, soil conditions. Standards: AASHTO, IRC guidelines ensure safety and comfort.',
    
    'what is sight distance': 'Sight distance is the distance a driver can see ahead. Types: 1) Stopping sight distance (to stop before obstacle), 2) Passing sight distance (to overtake safely), 3) Intersection sight distance. Depends on: design speed, reaction time, deceleration rate, road geometry. Adequate sight distance is critical for safety.',
    
    'explain pavement design': 'Pavement design determines thickness of layers to withstand traffic loads. Flexible pavement: layers (subgrade, sub-base, base, surface) with asphalt на top. Rigid pavement: concrete slab on subgrade. Design factors: traffic volume, axle loads, soil strength, climate. Methods: empirical (AASHTO) or mechanistic-empirical.',
    
    'what is horizontal curve': 'Horizontal curves provide gradual change in direction. Elements: radius (R), deflection angle (Δ), tangent length (T), curve length (L), chord length (C), external distance (E), mid-ordinate (M). Superelevation (banking) counteracts centrifugal force. Transition curves (spirals) provide smooth entry/exit.',
    
    'explain vertical curve': 'Vertical curves connect different grades. Types: summit (crest) curve for hill, sag (valley) curve for dip. Parabolic shape provides constant rate of change of grade. Design criteria: stopping sight distance, comfort (rate of vertical acceleration). Important for safety and ride quality on highways.',
    
    'what is superelevation': 'Superelevation (banking) is transverse slope on horizontal curves. Counteracts centrifugal force, allows safer higher speeds. Calculated as e = V²/(gR) where V is speed, g is gravity, R is radius. Combined with side friction, provides total resistance to skidding. Maximum e limited by vehicle stability.',
    
    'explain geometric design': 'Geometric design determines physical dimensions of road elements. Components: horizontal alignment (curves), vertical alignment (grades), cross-section (lanes, shoulders), intersections. Based on design speed, traffic volume, terrain. Standards ensure safety, comfort, economy. Critical for highway engineering.',
    
    'what is traffic engineering': 'Traffic engineering studies traffic flow and designs efficient transportation systems. Key concepts: traffic volume (vehicles/hour), speed, density. Level of Service (LOS) A-F measures quality. Applications: signal timing, capacity analysis, intersection design, traffic management. Uses simulation models for analysis.',
    
    'explain pavement materials': 'Pavement materials: asphalt (bitumen + aggregates) for flexible, concrete (cement + aggregates) for rigid. Asphalt: hot mix, cold mix, surface treatments. Concrete: plain, reinforced, prestressed. Subgrade: natural soil, improved soil. Base: granular, stabilized. Selection depends on traffic, climate, availability.',
    
    'what is highway capacity': 'Highway capacity is maximum traffic volume road can handle under given conditions. Measured in vehicles per hour per lane. Depends on: lane width, shoulder width, alignment, traffic composition. Level of Service (LOS) A (free flow) to F (breakdown). Capacity analysis essential for road design and improvement.',
    
    'explain intersection design': 'Intersection design manages conflicting traffic movements. Types: at-grade (signalized, unsignalized), grade-separated (interchanges). Design elements: channelization, median, turning radii, sight distance. Traffic signals use timing plans. Roundabouts provide continuous flow. Safety and efficiency are primary goals.',
    
    'what is traffic signals': 'Traffic signals control right-of-way at intersections. Phases: green, yellow, red. Timing based on traffic volume, pedestrian needs. Types: pretimed, actuated, adaptive. Coordination (green wave) improves progression. Modern systems use cameras, sensors, and computer control for optimization.',
    
    'explain pavement maintenance': 'Pavement maintenance preserves road condition. Types: routine (patching, crack sealing), periodic (resurfacing), rehabilitation (overlay, recycling). Pavement Management System (PMS) schedules maintenance based on condition and budget. Preventive maintenance extends pavement life, reduces lifecycle costs.',
    
    'what is geometric standards': 'Geometric standards specify minimum requirements for road design. Based on design speed: higher speed = larger radii, wider lanes, longer sight distance. Standards vary by country: AASHTO (USA), IRC (India), DMRB (UK). Ensure safety, comfort, economy. Critical for highway design approval.',
    
    'explain traffic survey': 'Traffic surveys collect data on vehicles, pedestrians, and road users. Types: volume count, speed study, origin-destination, parking survey. Methods: manual, automatic (sensors, cameras). Data used for: planning, design, capacity analysis, traffic management. Essential for transportation planning.',
    
    // Environmental Engineering
    'explain environmental engineering': 'Environmental engineering applies engineering principles to protect human health and environment. Key areas: water supply, wastewater treatment, air pollution control, solid waste management, hazardous waste management. Focuses on sustainability, pollution prevention, and regulatory compliance.',
    
    'what is water treatment': 'Water treatment removes contaminants to make water safe for drinking. Processes: coagulation, flocculation, sedimentation, filtration, disinfection. Coagulation (alum) clumps particles, filtration removes them, disinfection (chlorine) kills pathogens. Produces potable water meeting WHO standards. Essential for public health.',
    
    'explain wastewater treatment': 'Wastewater treatment removes pollutants from sewage before discharge. Primary: physical removal (screens, sedimentation). Secondary: biological treatment (activated sludge, trickling filters). Tertiary: advanced treatment (nutrient removal, disinfection). Sludge treatment: digestion, dewatering. Protects water quality and environment.',
    
    'what is air pollution': 'Air pollution is presence of harmful substances in atmosphere. Pollutants: particulate matter (PM2.5, PM10), NOx, SOx, CO, VOCs. Sources: vehicles, industry, power plants. Effects: health problems, acid rain, climate change. Control: scrubbers, filters, catalytic converters, emission standards. Monitoring essential for management.',
    
    'explain solid waste management': 'Solid waste management handles garbage from generation to disposal. Hierarchy: reduce, reuse, recycle, recover, dispose. Methods: landfilling, incineration, composting, recycling. Modern: integrated waste management, zero waste goals. Critical for environmental protection and resource conservation.',
    
    'explain water quality': 'Water quality parameters: physical (turbidity, color, taste), chemical (pH, dissolved oxygen, nutrients, heavy metals), biological (bacteria, viruses). Standards: WHO drinking water guidelines, effluent standards. Monitoring ensures safety. Parameters indicate pollution level and treatment effectiveness.',
    
    'what is sewage': 'Sewage is wastewater from domestic, commercial, industrial sources. Contains organic matter, pathogens, nutrients, chemicals. Collection: sewer systems. Treatment: wastewater treatment plants. Proper treatment prevents water pollution and disease. Combined sewer systems handle both sewage and stormwater.',
    
    'explain activated sludge': 'Activated sludge is biological wastewater treatment using microorganisms. Aeration tank provides oxygen for bacteria to consume organic matter. Mixed liquor settles in clarifier, sludge recycled. Produces high-quality effluent. Common in municipal wastewater treatment. Requires careful control of aeration and sludge age.',
    
    'what is reverse osmosis': 'Reverse osmosis (RO) removes dissolved solids using semipermeable membrane. Pressure > osmotic pressure forces water through membrane, rejecting contaminants. Used for: desalination, water purification, wastewater reuse. Produces high-purity water. Energy-intensive but effective for dissolved salt removal.',
    
    'explain air quality monitoring': 'Air quality monitoring measures pollutant concentrations. Methods: continuous (automated stations), manual (grab sampling). Pollutants measured: PM2.5, PM10, SO2, NO2, CO, O3. Data used for: compliance, health advisories, trend analysis. Essential for air quality management and public health protection.',
    
    // General Engineering
    'how to prepare for exams': 'To prepare for civil engineering exams: 1) Start early and create a study schedule, 2) Review past questions to understand patterns, 3) Focus on understanding concepts rather than memorization, 4) Practice numerical problems regularly, 5) Use Civil Master for organized resources, 6) Join study groups for discussion, 7) Take mock tests to assess preparation.',
    
    'career in civil engineering': 'Civil engineering offers diverse career paths: 1) Structural engineer (design buildings, bridges), 2) Geotechnical engineer (foundations, tunnels), 3) Transportation engineer (roads, railways), 4) Water resources engineer (dams, water supply), 5) Construction manager (project execution), 6) Urban planner (city development). Skills needed: technical knowledge, project management, communication.',
    
    'explain engineering ethics': 'Engineering ethics involves moral principles in professional practice. Key aspects: 1) Public safety and welfare (highest priority), 2) Competence (only work within expertise), 3) Integrity (honesty in reporting), 4) Confidentiality (protect client information), 5) Sustainability (environmental responsibility). Professional bodies enforce codes of conduct.',
    
    'what is project management': 'Project management plans, executes, and controls projects. Key areas: scope, time, cost, quality, resources, risk, communication. Tools: Gantt charts, CPM/PERT, earned value management. Civil engineering projects require coordination of multiple stakeholders, resources, and constraints. Critical for project success.',
    
    'explain engineering drawing': 'Engineering drawings communicate design information. Types: plans, elevations, sections, details. Standards: orthographic projection, dimensioning, symbols. CAD software: AutoCAD, Revit. Drawings are legal documents used for construction. Accuracy and clarity essential. Understanding drawings is fundamental for engineers.',
    
    'what is autocad': 'AutoCAD is CAD software for 2D/3D drafting and design. Used for: creating drawings, modifying designs, documentation. Commands: line, circle, trim, offset, hatch. Layers organize drawing elements. Essential tool for civil engineers for preparing construction drawings and plans.',
    
    'explain bim': 'Building Information Modeling (BIM) creates digital representations of physical and functional characteristics of facilities. 3D model with intelligent data. Benefits: coordination, clash detection, quantity takeoff, lifecycle management. Software: Revit, Navisworks. Transforming construction industry with integrated project delivery.',
    
    'what is quantity surveying': 'Quantity surveying involves measurement and costing of construction works. Tasks: takeoff quantities, pricing, cost estimation, valuation. Important for: project budgeting, tendering, cost control. Skills: measurement, construction knowledge, cost databases. Critical for project financial management.',
    
    'explain construction management': 'Construction management oversees project execution. Responsibilities: planning, scheduling, resource allocation, quality control, safety management. Methods: critical path method, bar charts. Challenges: weather, delays, budget constraints. Ensures projects completed on time, within budget, to quality standards.',
    
    'what is contract management': 'Contract management handles legal agreements in construction. Types: lump sum, unit price, cost plus. Documents: drawings, specifications, conditions of contract. Responsibilities: administration, claims management, payments. Understanding contract terms essential for risk management and dispute resolution.',
    
    'explain quality control': 'Quality control ensures construction meets specifications. Activities: material testing, inspection, documentation. Standards: ASTM, IS codes, ASTM. Non-conformance reports track issues. Quality assurance (QA) is the overall system, QC is the testing/inspection. Critical for structural safety and client satisfaction.',
    
    'what is safety in construction': 'Construction safety prevents accidents and injuries. Hazards: falls, electrical, excavation, equipment. Controls: PPE, training, procedures, barriers. OSHA regulations provide standards. Safety culture essential: management commitment, worker participation, continuous improvement. Zero accidents is the goal.',
    
    'explain value engineering': 'Value engineering optimizes cost-performance ratio. Process: information, function analysis, creative, evaluation, development, presentation. Goal: reduce cost without sacrificing quality. Used in design phase for cost optimization. Multidisciplinary team approach. Can save 10-30% of project cost.',
    
    'what is sustainable construction': 'Sustainable construction minimizes environmental impact. Principles: resource efficiency, energy efficiency, waste reduction, use of renewable materials. Practices: green building (LEED, BREEAM), recycled materials, energy-efficient design, water conservation. Reduces carbon footprint, improves occupant health, lowers lifecycle costs.',
    
    // Additional Civil Engineering Topics
    'explain stress and strain': 'Stress is force per unit area (σ = F/A). Strain is deformation per unit length (ε = ΔL/L). Relationship: stress-strain curve shows material behavior. Elastic region: Hooke\'s law (σ = Eε) where E is Young\'s modulus. Yield point: permanent deformation begins. Ultimate strength: maximum stress before failure.',
    
    'what is modulus of elasticity': 'Modulus of elasticity (Young\'s modulus, E) measures material stiffness. Ratio of stress to strain in elastic region. Steel: ~200 GPa, concrete: ~25-30 GPa. Higher E = stiffer material. Important for: deflection calculations, structural analysis, material selection. Determined from tensile test.',
    
    'explain poisson ratio': 'Poisson\'s ratio (ν) is ratio of lateral strain to axial strain under loading. When material stretches longitudinally, it contracts laterally. Typical values: steel (0.3), concrete (0.15-0.2). Used in: stress analysis, plate theory, finite element modeling. Negative values possible in auxetic materials.',
    
    'what is factor of safety': 'Factor of safety (FOS) is ratio of strength to actual stress. Accounts for uncertainties in material properties, loads, analysis. Typical values: steel (1.5-2.0), concrete (2.0-3.0), soil (2.5-3.0). Higher FOS for critical structures. Modern LRFD uses load and resistance factors instead of single FOS.',
    
    'explain limit state design': 'Limit state design ensures structures don\'t exceed specified states. Limit states: ultimate (collapse, overturning, buckling), serviceability (deflection, cracking, vibration). Partial safety factors for loads and materials. More rational than working stress method. Used in modern codes (IS 456, Eurocode).',
    
    'what is working stress method': 'Working stress method (WSM) uses permissible stresses (ultimate strength/FOS). Stresses under working loads must not exceed permissible values. Conservative but doesn\'t account for load variations realistically. Historically used, now largely replaced by limit state design for more economical designs.',
    
    'explain load path': 'Load path is the route loads take from application to foundation. Understanding load path critical for structural integrity. Loads must be transferred through continuous chain of elements. Discontinuities cause stress concentrations. Design ensures clear, direct load paths for gravity, wind, seismic loads.',
    
    'what is structural stability': 'Structural stability prevents collapse under loads. Types: global (overall structure), local (individual members). Failure modes: buckling, overturning, sliding. Analysis considers: geometry, supports, load combinations. Critical for tall structures, long-span bridges, slender columns. Stability often governs design.',
    
    'explain connection design': 'Connection design transfers forces between structural members. Types: moment (rigid), shear (simple), axial. Methods: bolted, welded, mechanical connectors. Design considerations: strength, ductility, constructibility. Connections often critical for structural performance and seismic resistance.',
    
    'what is seismic design': 'Seismic design resists earthquake forces. Principles: ductility, redundancy, regularity. Methods: equivalent static force, response spectrum, time-history analysis. Special detailing: confinement, lap splices, shear reinforcement. Codes: IS 1893, ASCE 7. Critical in seismic zones for life safety.',
    
    'explain wind load': 'Wind load is lateral pressure from wind on structures. Depends on: wind speed, building height, shape, exposure. Calculated using codes (IS 875, ASCE 7). Components: pressure on surfaces, suction on leeward side. Critical for tall buildings, long-span roofs. Dynamic effects important for flexible structures.',
    
    'what is dead load': 'Dead load is permanent load from structure weight. Includes: self-weight of structural elements, finishes, partitions. Calculated from material densities and dimensions. More predictable than live loads. Used in all load combinations. Accurate estimation important for realistic design.',
    
    'explain live load': 'Live load is variable load from occupancy and use. Includes: people, furniture, equipment, vehicles. Specified in codes based on building type (residential, office, warehouse). Distributed loads (kN/m²) or point loads. Considered in load combinations with safety factors.',
    
    'what is impact load': 'Impact load is dynamic load from sudden application. Examples: moving vehicles, machinery, dropped objects. Amplifies static load by impact factor. Important for: bridges, industrial floors, crane girders. Design uses dynamic analysis or impact factors from codes.',
    
    'explain thermal stress': 'Thermal stress develops when temperature change is restrained. Stress = EαΔT where E is modulus, α is thermal expansion coefficient, ΔT is temperature change. Important for: long structures, bridges, pipes. Accommodated by expansion joints, flexible connections. Can cause significant forces if not addressed.',
    
    'what is creep': 'Creep is time-dependent deformation under constant load. Significant in concrete over years. Affects: deflection, prestress loss, long-term behavior. Factors: stress level, humidity, age at loading, concrete mix. Accounted for in design using creep coefficients. Important for long-span structures.',
    
    'explain shrinkage': 'Shrinkage is volume reduction in concrete due to moisture loss. Types: plastic (fresh concrete), drying (hardened concrete). Causes cracking if restrained. Controlled by: proper curing, control joints, reinforcement. Affects: deflection, cracking, long-term durability. Important for mass concrete and restrained elements.',
    
    'what is fatigue': 'Fatigue is progressive structural damage under cyclic loading. Occurs at stresses below yield strength. Critical for: bridges, machinery, offshore structures. Design using S-N curves (stress vs cycles). Fatigue limit for steel, no limit for concrete. Important for structures with repeated loading.',
    
    'explain corrosion protection': 'Corrosion protection prevents metal deterioration. Methods: coatings (paint, galvanizing), cathodic protection, material selection (stainless steel). For concrete: adequate cover, low w/c ratio, corrosion inhibitors. Essential for durability, especially in marine/industrial environments. Lifecycle cost consideration important.',
    
    'what is fire resistance': 'Fire resistance is ability to withstand fire without collapse. Rated in hours (1-4 hours). Depends on: material, member size, protection. Concrete has good fire resistance, steel requires protection. Design per fire codes. Critical for life safety and property protection in buildings.',
    
    // Mathematics for Civil Engineering
    'explain calculus in civil engineering': 'Calculus is fundamental for civil engineering. Applications: rate of change (derivatives) for slopes, velocities; integration for areas, volumes, moments. Used in: structural analysis (deflection), fluid mechanics (flow rates), transportation (curves). Differential equations model dynamic systems like groundwater flow.',
    
    'what is differential equations': 'Differential equations relate functions to their derivatives. Used to model: heat transfer, groundwater flow, structural vibrations, traffic flow. Types: ordinary (one variable), partial (multiple variables). Solutions: analytical or numerical (finite difference, finite element). Essential for advanced engineering analysis.',
    
    'explain matrix methods': 'Matrix methods used in structural analysis (stiffness method, flexibility method). Structures represented as matrices of stiffness coefficients. Computer analysis uses matrix operations extensively. Advantages: handles complex structures, systematic approach, suitable for programming. Basis for FEM and structural software.',
    
    'what is numerical methods': 'Numerical methods approximate solutions when analytical solutions impossible. Methods: finite difference, finite element, finite volume. Used for: complex geometries, nonlinear problems, time-dependent analysis. Software: ANSYS, ABAQUS, SAP2000. Essential for modern engineering analysis and design.',
    
    'explain statistics in civil engineering': 'Statistics used for: quality control, reliability analysis, load modeling, experimental data analysis. Concepts: mean, standard deviation, probability distributions. Design codes use statistical methods for load factors and resistance factors. Important for risk assessment and decision-making under uncertainty.',
    
    'what is probability in civil engineering': 'Probability used for: reliability analysis, risk assessment, load modeling. Concepts: probability distributions, return periods (for floods, earthquakes). Design codes use probability-based methods (LRFD). Important for: hydraulic design, seismic design, structural reliability. Quantifies uncertainty in engineering.',
    
    'explain trigonometry in surveying': 'Trigonometry essential for surveying calculations. Used for: horizontal/vertical angles, distances, elevations. Functions: sine, cosine, tangent. Applications: coordinate calculations, curve setting, area computation. Fundamental for all surveying computations and measurements.',
    
    'what is geometry in civil engineering': 'Geometry used for: layout, setting out, curve design, area/volume calculations. Coordinate geometry for positioning. Descriptive geometry for 3D visualization. Essential for: construction layout, road design, structural detailing. CAD software heavily based on geometric principles.',
    
    // Construction Management
    'explain project scheduling': 'Project scheduling determines sequence and timing of activities. Methods: Gantt charts (bar charts), CPM (Critical Path Method), PERT (Program Evaluation Review Technique). Identifies critical path (longest path, determines project duration). Used for: planning, resource allocation, delay analysis. Essential for project management.',
    
    'what is critical path method': 'CPM is project scheduling technique using network diagram. Activities represented as nodes/links with durations. Critical path: longest path through network, zero float. Determines minimum project duration. Used for: schedule optimization, resource leveling, delay analysis. Fundamental for construction project management.',
    
    'explain resource management': 'Resource management plans and allocates resources (labor, equipment, materials). Techniques: resource leveling (smooth usage), resource allocation (assign to activities). Critical resources identified and managed. Shortages cause delays. Software: Primavera, MS Project. Essential for project efficiency and cost control.',
    
    'what is cost estimation': 'Cost estimation predicts project costs. Methods: unit cost (quantity × unit rate), parametric (statistical), bottom-up (detailed). Includes: direct costs (materials, labor), indirect costs (overhead, profit). Contingency for uncertainties. Accuracy improves with project definition. Critical for budgeting and bidding.',
    
    'explain tendering process': 'Tendering is competitive bidding for construction contracts. Process: pre-qualification, tender documents, bid submission, evaluation, award. Types: open (anyone can bid), selective (invited), negotiated. Criteria: price, technical capability, experience. Ensures fair competition and value for money.',
    
    'what is contract types': 'Contract types define risk allocation and payment. Lump sum: fixed price, contractor takes risk. Unit price: payment per unit quantity, owner takes quantity risk. Cost plus: reimbursed costs + fee, owner takes risk. Design-build: single responsibility for design and construction. Selection depends on project characteristics.',
    
    'explain construction equipment': 'Construction equipment improves productivity and enables difficult tasks. Types: earthmoving (excavators, bulldozers), lifting (cranes), compaction (rollers), concrete (mixers, pumps). Selection based on: project requirements, site conditions, availability. Proper maintenance essential for efficiency and safety.',
    
    'what is site layout': 'Site layout plans arrangement of facilities on construction site. Elements: storage areas, access roads, offices, utilities, equipment locations. Objectives: efficiency, safety, material flow. Changes as project progresses. Critical for project logistics and safety management.',
    
    'explain quality assurance': 'Quality assurance (QA) is systematic process to ensure quality. Includes: quality planning, quality control, quality improvement. QA focuses on preventing defects, QC detects them. Documentation, procedures, audits are key. Essential for: client satisfaction, regulatory compliance, risk management.',
    
    'what is safety management': 'Safety management prevents accidents and ensures worker health. Elements: safety policy, training, procedures, PPE, inspections, emergency response. OSHA regulations provide framework. Safety culture: management commitment, worker involvement. Zero accidents goal. Critical for ethical and legal compliance.',
    
    'explain environmental management': 'Environmental management minimizes construction impact. Aspects: dust control, noise control, waste management, water pollution prevention, erosion control. Compliance with environmental regulations. Sustainable practices: recycling, energy efficiency, green materials. Essential for regulatory compliance and social responsibility.',
    
    // Additional Practical Topics
    'explain reading drawings': 'Reading engineering drawings requires understanding symbols, scales, and conventions. Key elements: title block (project info), legend (symbols), views (plan, elevation, section), dimensions, notes. Practice and reference to standards essential. Fundamental skill for all civil engineers for construction supervision and design.',
    
    'what is site supervision': 'Site supervision ensures construction per drawings and specifications. Responsibilities: quality control, safety monitoring, progress tracking, coordination, documentation. Supervisor acts as link between office and site. Requires technical knowledge, communication skills, problem-solving ability. Critical for project quality and success.',
    
    'explain material testing': 'Material testing verifies quality and compliance. Concrete tests: slump, compressive strength. Soil tests: compaction, bearing capacity. Steel tests: tensile strength, bend test. Testing ensures materials meet specifications. Essential for quality control and structural safety. Performed on-site and in laboratories.',
    
    'what is inspection': 'Inspection verifies work meets standards. Types: routine (daily), periodic (weekly), special (critical activities). Checklists ensure consistency. Documentation: inspection reports, non-conformance reports. Essential for quality control, safety, and compliance. Required by codes and specifications.',
    
    'explain documentation': 'Documentation records project information. Types: drawings, specifications, reports, schedules, correspondence, as-built drawings. Essential for: communication, legal records, future reference, maintenance. Proper documentation critical for project management and facility operation.',
    
    'what is as-built drawings': 'As-built drawings show final constructed conditions. Updated during construction to reflect changes from design drawings. Include: actual dimensions, locations, materials. Essential for: maintenance, renovations, future projects. Legal requirement for many projects. Created from site measurements and records.',
    
    'explain handover process': 'Handover transfers completed project to owner. Includes: documentation (manuals, warranties), training, inspection, deficiency list. Formal acceptance marks project completion. Important for: facility operation, maintenance, warranty claims. Proper handover ensures smooth transition to operation phase.',
    
    'what is maintenance': 'Maintenance preserves facility condition and function. Types: preventive (scheduled), corrective (fix problems), predictive (condition-based). Planning based on: manufacturer recommendations, condition assessment, usage. Essential for: asset longevity, safety, cost control. Maintenance management systems optimize scheduling.',
    
    'explain facility management': 'Facility management oversees building operation and maintenance. Functions: maintenance, space planning, security, cleaning, utilities. Goal: efficient, safe, comfortable environment. Uses computerized maintenance management systems (CMMS). Important for: occupant satisfaction, cost control, asset value preservation.',
    
    // Greeting and General
    'hello': 'Hello! I\'m your Civil Master AI assistant. I can help you with civil engineering concepts, Civil Master features, exam preparation, and study guidance. What would you like to know today?',
    
    'hi': 'Hi there! I\'m here to help you with civil engineering studies and Civil Master questions. Feel free to ask about any civil engineering topic, and I\'ll do my best to provide a helpful explanation.',
    
    'hey': 'Hey! I\'m your Civil Master AI assistant. Whether you need help with structural analysis, soil mechanics, concrete design, or any other civil engineering topic, I\'m here to assist you. What can I help you with?',
    
    'good morning': 'Good morning! Ready to tackle some civil engineering concepts? I\'m here to help with any questions about Civil Master or civil engineering topics. What would you like to learn about today?',
    
    'good afternoon': 'Good afternoon! Hope your day is going well. If you have any civil engineering questions or need help with Civil Master features, feel free to ask. I\'m here to assist you!',
    
    'good evening': 'Good evening! Still studying? I\'m here to help with any civil engineering concepts or Civil Master questions. What can I help you with tonight?',
    
    'thank you': 'You\'re welcome! I\'m glad I could help. If you have more questions about civil engineering or Civil Master, feel free to ask anytime. Good luck with your studies!',
    
    'thanks': 'Happy to help! Let me know if you have any other questions about civil engineering or need assistance with anything else. Keep up the great work with your studies!',
    
    'bye': 'Goodbye! Good luck with your civil engineering studies. Remember, Civil Master is here to help you learn, practice, and succeed. Feel free to come back anytime you have questions!',
    
    'help': 'I can help you with: 1) Civil engineering concepts (structural analysis, soil mechanics, concrete design, etc.), 2) Civil Master features and usage, 3) Exam preparation strategies, 4) Practice questions and explanations, 5) Career guidance in civil engineering. What would you like help with?',
    
    'what can you do': 'I can provide detailed explanations of civil engineering topics, help with Civil Master app questions, offer exam preparation tips, explain concepts from past questions and tutorials, and provide career guidance. I have knowledge in structural engineering, geotechnical engineering, building materials, surveying, fluid mechanics, transportation engineering, and more.',
    
    'who are you': 'I\'m the Civil Master AI assistant, designed to help civil engineering students with their studies. I can explain concepts, answer questions, and provide guidance on using Civil Master resources. I\'m here to support your learning journey!',
    
    'how are you': 'I\'m functioning perfectly and ready to help you with civil engineering questions! I\'m here to assist you with any concepts, calculations, or Civil Master-related queries. What would you like to know?',
    
    'i am stuck': 'Don\'t worry, I\'m here to help! Tell me what topic or problem you\'re stuck on, and I\'ll do my best to explain it clearly. Whether it\'s structural analysis, soil mechanics, or any other civil engineering topic, we can work through it together.',
    
    'i dont understand': 'That\'s okay! Civil engineering can be complex. Let me break it down for you. What specific concept or topic are you having trouble with? I can explain it step by step with examples to make it clearer.',
    
    'explain more': 'I\'d be happy to explain in more detail! Could you let me know which specific aspect you\'d like me to elaborate on? For example, if we\'re discussing structural analysis, I can go deeper into shear force diagrams, bending moments, or specific analysis methods.',
    
    'give example': 'Sure! Let me give you a practical example. For instance, if you\'re studying beam design, consider a simply supported beam with a point load at the center. The maximum bending moment would be PL/4, and maximum shear force would be P/2. Would you like me to work through a specific example for your topic?',
    
    'formula': 'I can help with formulas! Civil engineering uses many formulas for different applications. Tell me which topic you need formulas for - whether it\'s stress calculations, concrete mix design, fluid mechanics equations, or something else - and I\'ll provide the relevant formulas and explain how to use them.',
    
    'calculation': 'I can help guide you through calculations! Tell me what you need to calculate - whether it\'s bearing capacity, concrete mix proportions, structural loads, or anything else - and I\'ll walk you through the steps and formulas needed.',
    
    'definition': 'I can provide definitions for civil engineering terms! Just tell me what term or concept you\'d like defined, and I\'ll give you a clear explanation along with context and examples to help you understand it better.',
    
    'difference': 'I can explain the differences between similar concepts in civil engineering. For example, I can explain the difference between: flexible and rigid pavement, laminar and turbulent flow, plane and geodetic surveying, nominal and design mix, or any other comparison you need. What would you like me to compare?',
    
    'types': 'I can explain the different types within civil engineering categories. For example, types of foundations, types of concrete, types of surveying, types of loads, types of soil, or any other classification you need. What types would you like to know about?',
    
    'advantages': 'I can explain the advantages of various civil engineering methods, materials, or techniques. For example, advantages of concrete over steel, advantages of total station over theodolite, advantages of precast concrete, or any other comparison. What would you like to know about?',
    
    'disadvantages': 'I can also explain the disadvantages or limitations of various civil engineering methods, materials, or techniques. This helps in making informed decisions for design and construction. What would you like me to discuss the disadvantages of?',
    
    'application': 'I can explain the applications of civil engineering concepts in real-world projects. For example, where certain soil types are used, applications of different concrete grades, where specific surveying methods are applied, or any other practical application. What applications would you like to know about?',
    
    'practical': 'I can provide practical examples and real-world applications of civil engineering concepts. This helps bridge the gap between theory and practice. What topic would you like practical examples for?',
    
    'real world': 'Civil engineering concepts are applied in real-world projects every day. I can explain how theoretical concepts are used in actual construction and design. What specific topic would you like real-world examples for?',
    
    'exam': 'I can help with exam preparation! I can explain concepts that commonly appear in exams, provide practice questions, explain past question solutions, and share study strategies. What subject or topic are you preparing for?',
    
    'study tips': 'Here are some study tips for civil engineering: 1) Understand concepts rather than memorizing, 2) Practice numerical problems regularly, 3) Draw diagrams to visualize problems, 4) Use past questions to identify patterns, 5) Create summary notes for each subject, 6) Form study groups for discussion, 7) Take regular breaks to avoid burnout. Would you like more specific tips for a particular subject?',
    
    'notes': 'I can help you understand key concepts that should be in your notes. For each subject, I can explain the important topics, formulas, and typical exam questions. What subject would you like help organizing notes for?',
    
    'past questions': 'Past questions are excellent for exam preparation! They help you understand question patterns and important topics. I can explain how to solve typical past questions from various civil engineering subjects. Which subject\'s past questions would you like help with?',
    
    'quiz': 'I can provide quiz questions to test your knowledge! I can give you multiple-choice questions, numerical problems, or conceptual questions from various civil engineering topics. This helps you assess your preparation and identify areas to improve. What subject would you like a quiz on?',
    
    'practice': 'Practice is essential for mastering civil engineering! I can provide practice problems, explain solution methods, and give you feedback. Regular practice with numerical problems and conceptual questions builds confidence and improves exam performance. What would you like to practice?',
    
    'test': 'I can help you prepare for tests by explaining concepts, providing practice questions, and sharing test-taking strategies. Common test topics include structural analysis, soil mechanics, concrete technology, fluid mechanics, and surveying. What specific test are you preparing for?',
    
    'fail': 'Don\'t worry if you\'re struggling - it\'s part of the learning process! Let me help you understand the concepts better. Tell me what topic you\'re finding difficult, and I\'ll explain it in a different way. Civil engineering is challenging, but with practice and the right approach, you can master it.',
    
    'confused': 'Confusion is normal when learning complex topics! Let me help clarify. Tell me what\'s confusing you, and I\'ll break it down into simpler parts. Sometimes approaching a problem from a different angle or using practical examples makes things clearer.',
    
    'hard': 'Civil engineering can be hard, but you\'re not alone! Many concepts are challenging at first. I\'m here to help make them easier to understand. What topic are you finding difficult? Let\'s work through it together step by step.',
    
    'easy': 'Some concepts might seem easy, but it\'s important to understand them thoroughly before moving on. If you\'d like, I can give you more advanced applications or related topics to deepen your understanding. What topic would you like to explore further?',
    
    'boring': 'Civil engineering might seem boring when studying theory, but it\'s actually fascinating when you see real-world applications! Think about the amazing structures engineers build - bridges, skyscrapers, dams, roads. I can show you how the concepts you\'re learning are used to create these incredible projects. What topic can I make more interesting for you?',
    
    'interesting': 'Civil engineering is full of interesting topics! From how skyscrapers stand tall to how water flows through pipes, there\'s so much to discover. What topics do you find most interesting? I can share more fascinating facts and applications about them.',
    
    'career': 'Civil engineering offers diverse and rewarding career opportunities! You can work in: structural design, construction management, geotechnical engineering, transportation planning, water resources, environmental engineering, urban planning, and more. The field is growing with infrastructure development worldwide. What aspect of civil engineering careers interests you?',
    
    'job': 'Civil engineering jobs are available in various sectors: government (public works, transportation), private (consulting firms, contractors), academia (teaching, research), and international organizations. Skills in demand: technical knowledge, project management, software skills, communication. Would you like guidance on preparing for a civil engineering career?',
    
    'salary': 'Civil engineering salaries vary by experience, location, and specialization. Entry-level positions typically start competitive and grow with experience. Specialized fields like structural engineering or project management often offer higher salaries. Skills in software (AutoCAD, Revit, structural analysis) and project management can increase earning potential.',
    
    'future': 'The future of civil engineering is exciting! Trends include: sustainable construction, smart cities, BIM and digital twins, AI in design, 3D printing of structures, green buildings, resilient infrastructure for climate change. Civil engineers will play crucial roles in addressing global challenges like urbanization and climate change.',
    
    'software': 'Civil engineers use various software: AutoCAD (drafting), Revit (BIM), SAP2000/ETABS (structural analysis), STAAD.Pro (structural design), Civil 3D (civil design), Primavera/MS Project (project management), GIS (mapping), hydraulic modeling software. Learning these tools enhances career prospects.',
    
    'skills': 'Important civil engineering skills: technical knowledge (codes, materials, analysis), problem-solving, communication (reports, presentations), project management, teamwork, computer skills (CAD, analysis software), attention to detail, creativity. Both technical and soft skills are valuable for career success.',
    
    'internship': 'Internships provide valuable hands-on experience. Look for opportunities with: construction companies, consulting firms, government agencies, research institutions. Internships help apply classroom knowledge, learn industry practices, build professional networks, and improve employability. Start looking early and prepare a strong application.',
    
    'research': 'Civil engineering research advances the field. Research areas: sustainable materials, smart structures, earthquake engineering, climate-resilient infrastructure, water treatment technologies, construction automation. Universities and research institutions offer opportunities. Research can lead to innovations and academic careers.',
    
    'innovation': 'Civil engineering innovation includes: self-healing concrete, 3D printed buildings, smart materials, drone surveying, AI in construction, green technologies, modular construction, digital twins. These innovations improve efficiency, sustainability, and safety. Staying updated with innovations is important for modern engineers.',
    
    'sustainability': 'Sustainability in civil engineering focuses on: reducing environmental impact, using renewable materials, energy-efficient design, waste reduction, water conservation, green building certification (LEED). Sustainable practices reduce lifecycle costs and environmental footprint. Essential for addressing climate change and resource depletion.',
    
    'green building': 'Green buildings minimize environmental impact through: energy efficiency, water conservation, sustainable materials, indoor environmental quality. Certification systems: LEED, BREEAM, Green Star. Benefits: lower operating costs, improved occupant health, reduced carbon footprint. Green building is increasingly important in modern construction.',
    
    'smart city': 'Smart cities use technology to improve urban life. Civil engineering aspects: intelligent transportation systems, smart water networks, energy-efficient infrastructure, digital twins, sensor networks. Benefits: improved efficiency, sustainability, quality of life. Civil engineers play key roles in planning and implementing smart city infrastructure.',
    
    'climate change': 'Civil engineering addresses climate change through: resilient infrastructure design, flood management, coastal protection, sustainable construction, renewable energy projects, carbon reduction strategies. Engineers design for changing climate conditions and extreme weather events. Climate adaptation is increasingly important in all civil engineering projects.',
    
    'disaster': 'Civil engineering helps prevent and respond to disasters: earthquake-resistant design, flood control systems, hurricane-resistant structures, fire protection, emergency shelters. Disaster mitigation includes risk assessment, resilient design, early warning systems, and emergency response planning. Engineers play crucial roles in protecting communities.',
    
    'infrastructure': 'Infrastructure includes: roads, bridges, railways, airports, water supply, sewage systems, power grids, communication networks. Civil engineers design, build, and maintain infrastructure. Infrastructure quality affects economic development and quality of life. Many countries are investing in infrastructure development and renewal.',
    
    'development': 'Civil engineering drives development by: building transportation networks, providing water and sanitation, constructing buildings and facilities, supporting industrial development, improving quality of life. Infrastructure development is key to economic growth and poverty reduction. Civil engineers contribute to sustainable development goals.',
    
    'global': 'Civil engineering is a global profession. Engineers work on international projects, share knowledge across borders, and address global challenges like climate change and urbanization. Professional qualifications may require local knowledge, but fundamental principles are universal. International collaboration and knowledge exchange advance the field.',
    
    'history': 'Civil engineering is one of the oldest engineering disciplines. Ancient marvels: pyramids, Roman aqueducts, Great Wall of China. Industrial Revolution brought railways, bridges, skyscrapers. Modern era: highways, airports, dams. Understanding history provides context and appreciation for engineering evolution and achievements.',
    
    'famous': 'Famous civil engineers and their contributions: Isambard Kingdom Brunel (bridges, railways), John Smeaton (lighthouses), Gustave Eiffel (Eiffel Tower), Fazlur Khan (skyscrapers), Emily Roebling (Brooklyn Bridge). Their innovations shaped modern civil engineering. Learning from their work inspires and educates.',
    
    'inspiration': 'Civil engineering is inspiring! Engineers have built: Burj Khalifa (tallest building), Three Gorges Dam (largest dam), Channel Tunnel (longest undersea tunnel), Millau Viaduct (tallest bridge). These achievements show what\'s possible with engineering knowledge and creativity. What inspires you about civil engineering?',
    
    'motivation': 'Stay motivated by remembering why you chose civil engineering: you\'ll build structures that serve communities, solve real-world problems, see tangible results of your work, contribute to society, and have diverse career opportunities. Every concept you learn brings you closer to making a real impact. Keep pushing forward!',
    
    'encouragement': 'You can do this! Civil engineering is challenging but rewarding. Every problem you solve, every concept you master, brings you closer to your goals. Don\'t be afraid to ask for help, practice regularly, and believe in yourself. Your hard work will pay off. I\'m here to support you every step of the way!',
    
    'congratulations': 'Congratulations on your progress! Every step forward in learning civil engineering is an achievement. Whether you mastered a difficult concept, solved a complex problem, or completed a course - well done! Keep up the great work, and remember that I\'m here to help you continue your learning journey.',
    
    'good luck': 'Good luck with your studies and exams! Preparation and practice are key to success. Use Civil Master\'s resources, review past questions, understand the concepts, and stay confident. You\'ve got this! Remember, I\'m here whenever you need help or have questions.',
    
    'welcome': 'Welcome to Civil Master! I\'m excited to help you on your civil engineering learning journey. Whether you\'re a beginner or advanced student, Civil Master has resources to support your studies. Explore the subjects, practice with questions, watch tutorials, and use this AI assistant whenever you need help. Let\'s learn together!',
};

// Search Index
const SEARCH_INDEX = [
    ...SUBJECTS_DATA.map(item => ({
        type: 'Subject',
        title: item.name,
        description: item.description,
        url: '#resources'
    })),
    ...VIDEOS_DATA.map(item => ({
        type: 'Video',
        title: item.title,
        description: item.description,
        url: '#videos'
    })),
    ...PAST_QUESTIONS_DATA.map(item => ({
        type: 'Past Question',
        title: `${item.subject} - ${item.year}`,
        description: `${item.questionCount} questions available`,
        url: '#features'
    })),
    ...NOTES_DATA.map(item => ({
        type: 'Note',
        title: `${item.subject} - ${item.topic}`,
        description: item.content,
        url: '#features'
    })),
    ...TUTORIALS_DATA.map(item => ({
        type: 'Tutorial',
        title: item.title,
        description: `${item.steps} steps - ${item.difficulty}`,
        url: '#features'
    }))
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SUBJECTS_DATA,
        VIDEOS_DATA,
        PAST_QUESTIONS_DATA,
        NOTES_DATA,
        TUTORIALS_DATA,
        PRACTICE_QUESTIONS_DATA,
        AI_RESPONSES,
        SEARCH_INDEX
    };
}
