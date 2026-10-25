const base='https://cdn.prod.website-files.com/668cb7adec02e140422345de/';
export const assets={hero:base+'66c6fb8ca55c188e59cf91d8_Banner%20Girl.webp',offer:base+'66c6fb8bbdff100351a1e011_Man%20Image%20Holding%20Graph.webp',office:base+'66d9685910e51570ad70d12e_Employ%20Images.webp'};
export const photo=id=>'https://images.unsplash.com/'+id+'?auto=format&fit=crop&w=900&q=85';
export const courses=[
['Management','Crisis management and problem-solving strategies','photo-1522071820081-009f0129c71c',0,6,'8k'],
['Design','Advanced photoshop techniques for designers','photo-1558655146-d09347e92766',0,8,'25k'],
['Finance','Operations management and process improvement','photo-1460925895917-afdab827c52f',0,12,'23k'],
['Development','Database integration with MongoDB','photo-1498050108023-c5249f4df085',59,10,'7k'],
['Management','Risk management and business continuity','photo-1454165804606-c3d57bc86b40',49,3,'8k'],
['Development','Full-stack development with the MERN stack','photo-1516321318423-f06f85e504b3',72,12,'22k'],
['Design','Design systems and pattern libraries','photo-1541462608143-67571c6738dd',99,8,'25k'],
['Design','Learn interactive Web Design by building real projects','photo-1559028012-481c04fa702d',79,12,'23k'],
['Finance','Understanding corporate finance and investments','photo-1554224155-6726b3ff858f',0,10,'8k']
].map(([category,title,image,price,lessons,enrolled],id)=>({id,category,title,image:photo(image),price,lessons,enrolled}));
export const posts=[
['Career','Improve knowledge retention with visual learning','photo-1434030216411-0b793f4b4173','October 4, 2024'],
['Development','Master online learning with proven strategies','photo-1516321318423-f06f85e504b3','October 4, 2024'],
['Teaching','How to enhance your learning experience today','photo-1523240795612-9a054b0db644','October 3, 2024'],
['Career','The evolution of teaching tools in the 21st century','photo-1503676260728-1c00da094a0b','September 17, 2024'],
['Development','The role of parental involvement in academic achievement','photo-1509062522246-3755977927d7','September 16, 2024'],
['Teaching','The role of technology in modern classrooms','photo-1516321318423-f06f85e504b3','September 14, 2024']
].map(([category,title,image,date],id)=>({id,category,title,image:photo(image),date}));
export const nav=[['Home','/home-one'],['About','/about-one'],['Courses','/course-one'],['Pricing','/pricing-one'],['Blog','/blog-one'],['Contact','/contact-one']];

const courseImages=["/assets/6710c8cf232065a7046261dc_Course_Image-7.webp","/assets/6710bcf4976ba1d072d8b476_Course_Image-4-2.webp","/assets/66eb9e25c4d132b7abc4dcb2_Course_Small_Image-8.webp","/assets/66eb9e1184c0c12d2244968d_Course_Small_Image-9.webp","/assets/66eb9e363f6e47ec5245cf09_Course_Small_Image-7.webp","/assets/66eb9e61096e930736b651e4_Course_Small_Image-5.webp","/assets/66fe66442929de6e874b3284_Course_Image.webp","/assets/66eba4fcd2cfcf11fe70ccfe_Course_Small_Image-4.webp",null];courses.forEach((c,i)=>{if(courseImages[i]) c.image=courseImages[i]});
const postImages=["/assets/66ff7196253a4813606a5f52_Blog_Small_Thumbnail-12.webp","/assets/66ff6e0a6f9b375fbca970fe_Blog_Small_Thumbnail-11.webp","/assets/66ff6a72dd07492f0cbb0a6d_Blog_Small_Thumbnail-10.webp","/assets/66e93b2410f6e96cbbc70c8d_Blog_Small_Thumbnail.webp","/assets/66e93b734e839a98823ff445_Blog_Small_Thumbnail-3.webp","/assets/66e93bb940c86a7d79f1e185_Blog_Small_Thumbnail-8.webp"];posts.forEach((p,i)=>{if(postImages[i]) p.image=postImages[i]});

courses[8].image="/assets/6710bb2b1bfbb88a06696c70_Course_Image-4.webp";
