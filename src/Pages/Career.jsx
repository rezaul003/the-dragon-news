import Footer from "../shared/Footer/Footer";
import BreakingLine from "../shared/Header/BreakingLine";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

const Career = () => {
    return (
        <div>
            <Header></Header>
            <BreakingLine></BreakingLine>
            <Navbar></Navbar>


            <div className="text-justify space-y-4 m-6">
                <p>
                    <span className="text-3xl font-semibold font-">  A career at The Dragon News</span> offers a dynamic, inclusive, and rewarding opportunity for individuals passionate about journalism, storytelling, and making a global impact. At The Dragon News, we believe that talent transcends borders, backgrounds, and experiences. Our doors are open to anyone who demonstrates the skills, drive, and commitment to contribute to high-quality, unbiased journalism.rld.
                </p>


                <p>


                    We seek individuals who are curious, dedicated, and eager to deliver accurate and impactful news. Whether you are an experienced journalist or just beginning your career, if you have the quality and passion for truthful reporting, there is a place for you at The Dragon News. Our team includes a diverse group of writers, editors, photographers, videographers, and digital media professionals who work together to ensure comprehensive and authentic coverage of global events.

                    At The Dragon News, we offer various roles in reporting, editorial, multimedia production, technology, marketing, and more. We are committed to fostering an environment that encourages creativity, innovation, and professional growth. With a global audience and a wide range of coverage, our employees have the opportunity to work on stories that make a difference, contribute to global conversations, and bring attention to underreported issues.

                    We value diversity of thought, experience, and perspective, believing that a diverse team leads to better, more insightful journalism. If you are someone who values integrity, transparency, and truth in journalism and has the skills to match, The Dragon News is the ideal place to build a meaningful career. Join us as we bring authentic and unbiased news to the world.
                </p>


            </div>
            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default Career;