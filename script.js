const textPage1 = "Introduction to Computer Science: Computer science is the study of computation, automation, and information. It involves the theory of computation, algorithms, data structures, computer and network design, and artificial intelligence. Understanding these concepts is crucial for developing efficient and innovative technological solutions. Computer science spans several core areas including programming, systems architecture, databases, and software engineering. Additionally, fields like artificial intelligence, machine learning, and data science have grown significantly in recent years. By mastering computer science principles, you can develop software that solves real-world problems, create systems that drive the future of technology, and contribute to advancements in numerous industries.";
        
const textPage2 = "Introduction to Engineering: Engineering is the application of scientific principles to design, build, and analyze objects and systems. It involves various disciplines such as mechanical, civil, electrical, and chemical engineering, each focusing on different aspects of technology and design. Mechanical engineering deals with the design and manufacturing of physical systems, while civil engineering focuses on the construction of infrastructure such as buildings and bridges. Electrical engineering encompasses the study of electronics, electromagnetism, and circuit design. Chemical engineering involves the transformation of raw materials into useful products through chemical processes. Understanding engineering principles allows for the creation of innovative solutions to complex problems, improves efficiency, and drives technological advancements across various industries. Engineers play a critical role in shaping the modern world by developing new technologies, enhancing existing systems, and ensuring sustainable development. As the demand for technological innovation grows, the field of engineering continues to evolve, incorporating cutting-edge research and advancements to address the challenges of the future.";
        
const textPage3 = "Introduction to Biology: Biology is the scientific study of life and living organisms. It encompasses a wide range of fields, including <b>genetics</b>, <b>microbiology</b>, <b>ecology</b>, and <b>physiology</b>. Biologists explore the structure, function, growth, origin, evolution, and distribution of living organisms. <b>Genetics</b> focuses on the heredity and variation of organisms, while <b>microbiology</b> studies microscopic organisms such as bacteria, viruses, and fungi. <b>Ecology</b> examines the interactions of organisms with their environment, and <b>physiology</b> explores the functions and mechanisms within living systems. Modern biology is increasingly interdisciplinary, combining principles from chemistry, physics, and mathematics to understand complex biological systems. Recent advancements in <b>biotechnology</b> and <b>genomics</b> have revolutionized the field, leading to significant breakthroughs in medicine, agriculture, and environmental conservation. Understanding biology is essential for addressing global challenges such as disease outbreaks, environmental degradation, and food security. By studying biology, scientists can develop new treatments for diseases, enhance crop yields, and protect endangered species. As our knowledge of biological processes expands, biology will continue to play a crucial role in improving human health and preserving the natural world.";
        
const textPage4 = "Introduction to Chemistry: Chemistry is the branch of science that studies the composition, structure, properties, and changes of matter. It involves understanding how substances interact, combine, and transform to form new substances. Chemistry is divided into several sub-disciplines, including organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry. Organic chemistry focuses on the study of carbon-containing compounds, while inorganic chemistry deals with inorganic compounds. Physical chemistry combines principles of physics and chemistry to study the physical properties of molecules, the forces that act upon them, and their interactions. Analytical chemistry involves the analysis of material samples to understand their chemical composition and structure. Biochemistry explores the chemical processes within and related to living organisms. Chemistry plays a vital role in various industries, including pharmaceuticals, agriculture, environmental science, and materials engineering. Recent advancements in chemistry have led to the development of new materials, sustainable energy solutions, and improved analytical techniques. Understanding chemistry is crucial for developing new drugs, creating innovative materials, and addressing environmental issues. As our knowledge of chemical processes deepens, chemistry will continue to drive scientific and technological progress, contributing to a better understanding of the natural world and the development of solutions to global challenges. 😊 Chemistry is fascinating 😄 and has a profound impact on our daily lives. Let's explore its wonders together! 🙏";
        
const captionsPage1 = textPage1.split(' ').map(word => ({ text: word, emotion: "neutral" }));
const captionsPage2 = textPage2.split(' ').map(word => ({ text: word, emotion: "neutral" }));
const captionsPage3 = textPage3.split(' ').map(word => {
    return { text: word.replace(/<b>|<\/b>/g, ''), emotion: "neutral", bold: /<b>/.test(word) };
});
const captionsPage4 = textPage4.split(' ').map(word => {
    let emotion = "neutral";
    if (/😊|😄|🙏/.test(word)) emotion = "happy";
    return { text: word, emotion };
});

function displayCaption(captionBox, textArray, index = 0, wordsPerLine = 7) {
    if (index < textArray.length) {
        setTimeout(() => {
            let line = textArray.slice(index, index + wordsPerLine).map(word => {
                const span = document.createElement('span');
                span.classList.add('caption-text', `emotion-${word.emotion}`);
                if (word.bold) span.classList.add('bold');
                span.textContent = word.text;
                return span;
            });

            line.forEach(span => captionBox.appendChild(span));
            captionBox.appendChild(document.createElement('br'));
            captionBox.scrollTop = captionBox.scrollHeight; // Scroll to bottom

            displayCaption(captionBox, textArray, index + wordsPerLine, wordsPerLine);
        }, 1000); // Adjust the speed of the captions here
    }
}

window.onload = () => {
    const pages = ['page1', 'page2', 'page3', 'page4'];
    let currentPageIndex = 0;

    function showPage(index) {
        pages.forEach((pageId, i) => {
            const page = document.getElementById(pageId);
            page.classList.toggle('active', i === index);
        });
    }

    showPage(currentPageIndex);

    document.getElementById('next1').onclick = () => {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
            if (currentPageIndex === 1) displayCaption(document.getElementById('captionBox2'), captionsPage2, 0, 7);
        }
    };

    document.getElementById('previous2').onclick = () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    };

    document.getElementById('next2').onclick = () => {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
            if (currentPageIndex === 2) displayCaption(document.getElementById('captionBox3'), captionsPage3, 0, 7);
        }
    };

    document.getElementById('previous3').onclick = () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    };

    document.getElementById('next3').onclick = () => {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
            if (currentPageIndex === 3) displayCaption(document.getElementById('captionBox4'), captionsPage4, 0, 7);
        }
    };

    document.getElementById('previous4').onclick = () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    };

    document.getElementById('submit').onclick = submitResponses;

    displayCaption(document.getElementById('captionBox1'), captionsPage1, 0, 7);
};

async function submitResponses() {
    const quiz1Response = document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : "No response";
    const quiz2Response = document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : "No response";
    const quiz3Response = document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : "No response";
    const quiz4Response = document.querySelector('input[name="q4"]:checked') ? document.querySelector('input[name="q4"]:checked').value : "No response";
    const email = 'sundavid7740@gmail.com'; // Or get the email from a form field

    const responses = {
        email: email,
        q1: quiz1Response,
        q2: quiz2Response,
        q3: quiz3Response,
        q4: quiz4Response
    };

    try {
        const response = await fetch('submit_responses.php', {
            method: 'POST',
            body: JSON.stringify(responses),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const result = await response.json();
            if (result.status === 'success') {
                alert(result.message);
            } else {
                alert(`There was an error submitting your responses. Please try again. Error: ${result.message}`);
            }
        } else {
            const responseBody = await response.text();
            alert(`There was an error submitting your responses. Please try again. Response: ${responseBody}`);
        }
    } catch (error) {
        alert(`There was an error submitting your responses. Please try again. Error: ${error.message}`);
    }
}

// Video stream setup
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        document.getElementById('video1').srcObject = stream;
        document.getElementById('video2').srcObject = stream;
        document.getElementById('video3').srcObject = stream;
    }).catch(function(error) {
        console.error("Error accessing webcam: ", error);
    });
}
