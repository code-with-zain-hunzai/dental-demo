import { GoArrowUpRight } from "react-icons/go";
import smile from "../assets/ArticlesImg/smile.png";
import condition from '../assets/ArticlesImg/condition.png';
import prepare from "../assets/ArticlesImg/prepare.png"

const Articles = () => {
    const articles = [
        {
            id: "smile",
            className: "smileArticle",
            image: { src: smile, alt: "smile" },
            title:
                <>5 Tips for Creating the Most <br /> Brightest Smile in World</>,
            description:
                <>Mass communication has led to modern <br /> marketing strategies to continue focusing <br /> on brand awareness.</>,
            buttonText: "Read more",
            icon: <GoArrowUpRight style={{ color: '#F9876E', marginTop: '5px' }} />
        },
        {
            id: "condition",
            className: "smileArticle",
            image: { src: condition, alt: "condition" },
            title:
                <>How to Keep Your Teeth <br /> Always in the Best Condition</>,
            description:
                <>Mass communication has led to modern <br /> marketing strategies to continue focusing <br /> on brand awareness.</>,
            buttonText: "Read more",
            icon: <GoArrowUpRight style={{ color: '#F9876E', marginTop: '5px' }} />
        },
        {
            id: "prepare",
            className: "smileArticle",
            image: { src: prepare, alt: "prepare" },
            title:
                <>
                    Do You Need to Prepare <br /> before Going to the Dentist?</>,
            description:
                <> Large distributions and heavy promotions. <br /> The fast-paced environment <br /> of digital
                    payment service.</>,
            buttonText: "Read more",
            icon: <GoArrowUpRight style={{ color: '#F9876E', marginTop: '5px' }} />
        }
    ];

    return (
        <div className="ml-[135px] mr-[129px]">
            <div className="text-center justify-center items-center mt-20">
                <h2 className="dental-demo text-[46px] font-medium">articles and useful tips</h2>
                <p className="textColor text-sm font-normal">Read on for useful information about tasty and healthy food. Interesting events and recipes. <br /> New meal plans and specialized diets for weight loss or gain</p>
            </div>
            <div className="mt-16 gap-12 grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                {articles.map(article => (
                    <div key={article.id} className={article.className}>
                        <img src={article.image.src} alt={article.image.alt} />
                        <h3 className="mt-7 text-2xl font-semibold" style={{ color: "#2E2C49" }}>{article.title}</h3>
                        <p className="textColor mt-6 text-[16px]">{article.description}</p>
                        <div className="flex mt-[30px]">
                            <button className="btncolor " style={{ color: '#F9876E' }}>{article.buttonText}</button>
                            {article.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Articles;
