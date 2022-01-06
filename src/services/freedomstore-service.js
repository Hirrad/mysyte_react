import Pic1 from "../components/img/_DSC0245.JPG";
import Pic2 from "../components/img/_DSC0253.JPG";
import Pic3 from "../components/img/_DSC0131.JPG";
import Pic4 from "../components/img/_DSC0245.JPG";
import Pic5 from "../components/img/_DSC0085.JPG";
import Pic6 from "../components/img/_DSC0010.JPG";
import Pic7 from "../components/img/_DSC0011.JPG";
import Pic8 from "../components/img/_DSC0012.JPG";
import Pic9 from "../components/img/_DSC0013.JPG";
import Pic10 from "../components/img/_DSC0014.JPG";
import Pic11 from "../components/img/_DSC0015.JPG";
import Pic12 from "../components/img/_DSC0011.JPG";
import Pic13 from "../components/img/_DSC0245.JPG";
import Pic14 from "../components/img/_DSC0008.JPG";
import Pic15 from "../components/img/_DSC0083.JPG";
import Pic16 from "../components/img/_DSC0084.JPG";
import Pic17 from "../components/img/_DSC0086.JPG";
import Pic18 from "../components/img/_DSC0087.JPG";
import Pic19 from "../components/img/_DSC0088.JPG";
import Pic20 from "../components/img/_DSC0089.JPG";
import Pic21 from "../components/img/_DSC0090.JPG";
import Pic22 from "../components/img/_DSC0091.JPG";
import Pic23 from "../components/img/_DSC0092.JPG";
import Pic24 from "../components/img/_DSC0093.JPG";
import Pic28 from "../components/img/_DSC0245.JPG";


export default class FreedomstoreService {

    async getResource (url) {
        const res =await fetch(url);
        if(!res.ok){
            throw new Error(`Could not frtch ${url}`+
            `, received ${res.status}`)
        }
        return await res.json();
    }
_blogItems=[{
    id:0,
    tittle:"What level of hiker are you?",
    described: "Determining what level of hiker you are can be an important tool when\n" +
        "                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
        "                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
        "                    novice, moderate, advanced moderate, expert, or expert backpacker?",
    text:'        <h1>Lorem ipsum dolor.</h1>\n' +
        '        <div className="page__img page__img-right">\n' +
        '\n' +
        '\n' +
        '                <img src={Pic1} alt=""/>\n' +
        '\n' +
        '        </div>\n' +
        '        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam beatae debitis dicta dolor harum\n' +
        '            labore magni optio pariatur quasi quos ratione, recusandae sapiente suscipit tempore velit veritatis\n' +
        '            voluptatum. Cumque et itaque nobis optio, quasi qui quibusdam quidem quo vitae?\n' +
        '        </p>\n' +
        '        <div className="page__img page__img-left">\n' +
        '\n' +
        '                <img src={Pic2} alt=""/>\n' +
        '\n' +
        '        </div>\n' +
        '        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem maiores placeat! Ab accusantium\n' +
        '            alias assumenda atque beatae eaque enim fugit itaque modi natus nisi odio, odit quaerat quod similique sit\n' +
        '            velit veritatis, voluptatum! Accusamus aut commodi, distinctio exercitationem laboriosam maiores neque nisi\n' +
        '            quae quia voluptatem? A, ad aut corporis cum distinctio dolor eligendi error fugit illum laudantium\n' +
        '            necessitatibus nesciunt odio pariatur placeat praesentium quas quibusdam sint soluta temporibus, voluptatem.\n' +
        '            Aperiam cupiditate doloremque dolores dolorum magni necessitatibus officia quam quas quidem reiciendis.\n' +
        '            Adipisci consectetur, consequatur cum dolores doloribus enim fuga fugit hic iusto laborum, minus nobis\n' +
        '            perferendis porro quis quisquam totam voluptatum. Accusantium ad aliquid animi consectetur consequatur cum\n' +
        '            debitis delectus deleniti dignissimos distinctio dolore dolores ducimus ea error harum in ipsam iste itaque\n' +
        '            obcaecati odio omnis quidem recusandae rem sit velit veritatis, voluptas voluptatum? Ad, consequatur culpa\n' +
        '            dignissimos, dolor doloremque doloribus eum ex fugiat hic illum in ipsa ipsum maxime minus mollitia\n' +
        '            necessitatibus odio quam quisquam recusandae repellendus reprehenderit rerum sed veritatis voluptatibus\n' +
        '            voluptatum. Aperiam, autem commodi cumque debitis dolore, excepturi impedit iure laudantium molestias non\n' +
        '            placeat praesentium provident quia quibusdam sed tempora unde velit? Aspernatur culpa dicta illo molestias\n' +
        '            nesciunt omnis recusandae suscipit voluptate! Accusamus aliquid blanditiis consequuntur cum dignissimos\n' +
        '            explicabo fuga id iure iusto laudantium magni maxime minus placeat qui repellendus reprehenderit saepe,\n' +
        '            sequi sit. Aliquam autem culpa ea excepturi fuga id iste, iure laborum necessitatibus quae, rem repellendus\n' +
        '            repudiandae sit tempore, tenetur. Accusantium atque delectus dolorem ex exercitationem hic id in laudantium\n' +
        '            minima, modi nihil non officiis possimus provident quae, quasi quidem quis sapiente sed sequi sit soluta\n' +
        '            sunt suscipit totam voluptate? Alias architecto beatae, dolorum earum maxime officia quod. Animi aperiam aut\n' +
        '            autem deleniti esse ex hic iste minima odit pariatur perferendis reiciendis, sequi sint soluta, sunt vero\n' +
        '            voluptas. In, minima nostrum. Mollitia, nulla quisquam?\n' +
        '        </p>\n' +
        '        <div className="page__img page__img-inline">\n' +
        '\n' +
        '                <img src={Pic3} alt=""/>\n' +
        '\n' +
        '        </div>\n' +
        '        <div className="page__img page__img-inline">\n' +
        '\n' +
        '                <img src={Pic4} alt=""/>\n' +
        '\n' +
        '        </div>\n' +
        '        <div className="page__img page__img-inline">\n' +
        '\n' +
        '                <img src={Pic5} alt=""/>\n' +
        '\n' +
        '        </div>\n' +
        '        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorum eaque esse eum, id incidunt\n' +
        '            reprehenderit tempora vel veritatis! Aliquam beatae consectetur corporis cumque delectus eligendi est\n' +
        '            eveniet harum maxime molestias, necessitatibus nobis officiis optio provident rem tempora unde? Autem\n' +
        '            consequatur delectus eius expedita necessitatibus nostrum reiciendis sed soluta tempora? Alias aspernatur\n' +
        '            consectetur culpa, dolor doloremque dolores dolorum eius eum facere facilis maiores nihil nisi nostrum\n' +
        '            perferendis quia recusandae reiciendis reprehenderit repudiandae sapiente sit soluta tempore temporibus\n' +
        '            voluptas. Blanditiis delectus labore nisi perspiciatis placeat quis. Distinctio dolore dolorum enim non\n' +
        '            nulla omnis perferendis soluta ut voluptatem voluptatibus! Accusamus, assumenda dicta fugiat illum in\n' +
        '            incidunt nulla obcaecati similique? Aperiam aut blanditiis, dolores ducimus eum fugit ipsam nemo nisi odit\n' +
        '            pariatur recusandae voluptatum? Aperiam aut dolore dolorem doloremque ducimus, expedita fugiat fugit\n' +
        '            incidunt laboriosam maiores maxime nam necessitatibus nesciunt nihil nobis placeat quam, rerum, temporibus\n' +
        '            veniam voluptatum. Accusantium aut ipsam molestiae voluptate?</p>\n' +
        '        <div className="page__img page__img-center">\n' +
        '\n' +
        '                <img src={Pic6} alt=""/>\n' +
        '\n' +
        '        </div>\n' +
        '        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nostrum placeat quas veritatis? Aliquid\n' +
        '            animi, aperiam blanditiis consequuntur corporis cupiditate dolor dolorum ea eius eligendi eos illo illum\n' +
        '            ipsam laboriosam laudantium maxime mollitia necessitatibus nobis nulla odit perferendis placeat possimus\n' +
        '            provident quae quam reprehenderit repudiandae suscipit totam ut veritatis. Beatae cumque dolore est harum\n' +
        '            iure minus nemo nobis numquam porro quae quia rem rerum sit, sunt vero! Ab dolores eius exercitationem hic\n' +
        '            illo magnam nam odio rerum similique ullam? Ab accusamus architecto aspernatur, atque dignissimos eaque enim\n' +
        '            esse et facilis ipsum iure iusto maiores neque nesciunt odio officiis, quae quaerat quam qui quis quod\n' +
        '            ratione reprehenderit sequi sunt, totam unde velit voluptate! Aliquid animi aperiam atque blanditiis\n' +
        '            consectetur consequuntur cumque debitis dolore dolores dolorum ea, eaque et eum eveniet facere fugit harum\n' +
        '            ipsa maiores natus, neque nihil nisi quia quidem quisquam quos reprehenderit sequi soluta, totam vero\n' +
        '            voluptates! Aliquid aut debitis delectus dignissimos eius, est explicabo facere impedit in necessitatibus\n' +
        '            neque nobis praesentium, quisquam quod repellat reprehenderit tempora voluptatem. Accusantium aliquid beatae\n' +
        '            culpa dicta dignissimos dolores eius eos eum fugiat incidunt laboriosam nemo nobis numquam omnis pariatur\n' +
        '            quas qui quo quos repellendus sapiente, sequi ullam unde ut, vero voluptate. Illo!</p>',
    img:Pic1

},
    {
        id:2,
        tittle:"What level of hiker are you?",
        described: "Determining what level of hiker you are can be an important tool when\n" +
            "                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                    novice, moderate, advanced moderate, expert, or expert backpacker?",
        text:"Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "   ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "        novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                  novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "              novice, moderate, advanced moderate, expert, or expert backpacker?",
        img:Pic2

    },
    {
        id:3,
        tittle:"What level of hiker are you?",
        described: "Determining what level of hiker you are can be an important tool when\n" +
            "                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                    novice, moderate, advanced moderate, expert, or expert backpacker?",
        text:"Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "   ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "        novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                  novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "              novice, moderate, advanced moderate, expert, or expert backpacker?",
        img:Pic3

    },
    {
        id:4,
        tittle:"What level of hiker are you?",
        described: "Determining what level of hiker you are can be an important tool when\n" +
            "                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                    novice, moderate, advanced moderate, expert, or expert backpacker?",
        text:"Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "   ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "        novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                  novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "              novice, moderate, advanced moderate, expert, or expert backpacker?",
        img:Pic4

    },
    {
        id:5,
        tittle:"What level of hiker are you?",
        described: "Determining what level of hiker you are can be an important tool when\n" +
            "                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                    novice, moderate, advanced moderate, expert, or expert backpacker?",
        text:"Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            "   ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "        novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "                  novice, moderate, advanced moderate, expert, or expert backpacker? Determining what level of hiker you are can be an important tool when\n" +
            " planning future hikes. This hiking level guide will help you plan hikes according to different hike\n" +
            " ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n" +
            "              novice, moderate, advanced moderate, expert, or expert backpacker?",
        img:Pic5

    }]
  async  getBlogItems(){

        return this._blogItems;
    }

    _galleryItems = [{
        id: 1,
        name: 'Полонына руна',
        img_tittle: Pic1,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
        {
            id: 2,
            name: 'Полонына руна2',
            img_tittle: Pic2,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12,Pic13, Pic14, Pic15, Pic16, Pic17, Pic18, Pic19, Pic20, Pic21, Pic22, Pic23, Pic24,Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12,Pic13, Pic14, Pic15, Pic16, Pic17, Pic18, Pic19, Pic20, Pic21, Pic22, Pic23, Pic24]
        }, {
            id: 3,
            name: 'Полонына руна3',
            img_tittle: Pic3,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12,Pic13, Pic14, Pic15, Pic16, Pic28]
        },
        {
            id: 4,
            name: 'Полонына руна4',
            img_tittle: Pic4,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 5,
            name: 'Полонына руна5',
            img_tittle: Pic5,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 6,
            name: 'Полонына руна6',
            img_tittle: Pic6,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 7,
            name: 'Полонына руна7',
            img_tittle: Pic7,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 8,
            name: 'Полонына руна8',
            img_tittle: Pic8,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 9,
            name: 'Полонына руна9',
            img_tittle: Pic9,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 10,
            name: 'Полонына руна10',
            img_tittle: Pic10,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 11,
            name: 'Полонына руна11',
            img_tittle: Pic11,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        },
        {
            id: 12,
            name: 'Полонына рунаdfdsfs',
            img_tittle: Pic12,
            img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
        }
    ];
    async  getGalleryItems(){

        return this._galleryItems;
    }

    async  getGalleryItem(id){


        return this._galleryItems.find(body=>body.id===id) ;
    }

    getBlog(){
        return[{id:1}];
    }
}

// const free =new FreedomstoreService();
// console.log(free.getGalleryItem(3))