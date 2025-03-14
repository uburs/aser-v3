<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotion-Enhanced Captions</title>
    <style>
        body {
            font-family: 'Times New Roman', Times, serif;
            background-color: #f0f8ff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            display: none;
            width: 90%;
            height: 80%;
            border: 2px solid #000;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
        }
        .container.active {
            display: flex;
        }
        .video-box {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 2px solid #000;
        }
        .caption-box {
            width: 70%;
            padding: 20px;
            overflow-y: auto;
            font-size: 18px;
            line-height: 1.5;
            background: #fff;
        }
        .emotion-happy {
            color: green;
        }
        .emotion-sad {
            color: blue;
        }
        .emotion-angry {
            color: red;
            animation: shake 0.5s;
        }
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
        .caption-text {
            display: inline-block;
            margin-right: 5px;
            opacity: 0;
            animation: fadeIn 1s forwards;
        }
        .caption-text.bold {
            font-weight: bold;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        video {
            width: 90%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .caption-overlay {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 20px;
            text-align: center;
            color: white;
            background: rgba(0, 0, 0, 0.5);
            font-size: 18px;
            line-height: 1.5;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .emotion-detection-overlay {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            overflow-y: hidden;
            padding: 20px;
            text-align: center;
            color: black;
            font-size: 18px;
            line-height: 1.5;
            display: flex;
            flex-direction: column;
            align-items: center;
            pointer-events: none;
        }
        .emotion-text {
            display: inline-block;
            margin-right: 5px;
            animation: moveUp 10s linear infinite;
        }
        @keyframes moveUp {
            from {
                transform: translateY(100%);
            }
            to {
                transform: translateY(-100%);
            }
        }
        .navigation {
            position: absolute;
            bottom: 20px;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="page1" class="container">
        <div class="video-box">
            <video id="video1" autoplay muted></video>
        </div>
        <div class="caption-box" id="captionBox1">
            <!-- Captions will appear here -->
        </div>
        <div id="quiz1" class="quiz-container">
            <h3>Quiz: What is computer science?</h3>
            <form id="quizForm1">
                <label>
                    <input type="radio" name="q1" value="The study of languages"> The study of languages
                </label><br>
                <label>
                    <input type="radio" name="q1" value="The study of computation, automation, and information"> The study of computation, automation, and information
                </label><br>
                <label>
                    <input type="radio" name="q1" value="The study of biology"> The study of biology
                </label><br>
            </form>
        </div>
        <div class="navigation">
            <button onclick="showNext()">Next</button>
        </div>
    </div>

    <div id="page2" class="container">
        <div class="video-box" style="width: 100%;">
            <video id="video2" autoplay muted></video>
            <div class="caption-overlay" id="captionBox2">
                <!-- Captions will appear here -->
            </div>
        </div>
        <div id="quiz2" class="quiz-container">
            <h3>Quiz: Which area does computer science cover?</h3>
            <form id="quizForm2">
                <label>
                    <input type="radio" name="q2" value="Cooking"> Cooking
                </label><br>
                <label>
                    <input type="radio" name="q2" value="Programming, systems architecture, databases, and software engineering"> Programming, systems architecture, databases, and software engineering
                </label><br>
                <label>
                    <input type="radio" name="q2" value="History"> History
                </label><br>
            </form>
        </div>
        <div class="navigation">
            <button onclick="showPrevious()">Previous</button>
            <button onclick="showNext()">Next</button>
        </div>
    </div>

    <div id="page3" class="container">
        <div class="video-box">
            <video id="video3" autoplay muted></video>
        </div>
        <div class="caption-box" id="captionBox3">
            <!-- Captions will appear here -->
        </div>
        <div id="quiz3" class="quiz-container">
            <h3>Quiz: What are the recent growth areas in computer science?</h3>
            <form id="quizForm3">
                <label>
                    <input type="radio" name="q3" value="Artificial intelligence, machine learning, and data science"> Artificial intelligence, machine learning, and data science
                </label><br>
                <label>
                    <input type="radio" name="q3" value="Painting"> Painting
                </label><br>
                <label>
                    <input type="radio" name="q3" value="Carpentry"> Carpentry
                </label><br>
            </form>
        </div>
        <div class="navigation">
            <button onclick="showPrevious()">Previous</button>
            <button onclick="showNext()">Next"></button>
        </div>
    </div>

    <div id="page4" class="container">
        <div class="emotion-detection-overlay" id="captionBox4">
            <!-- Captions will appear here -->
        </div>
        <div id="quiz4" class="quiz-container">
            <h3>Quiz: Why is understanding computer science concepts crucial?</h3>
            <form id="quizForm4">
                <label>
                    <input type="radio" name="q4" value="For developing efficient and innovative technological solutions"> For developing efficient and innovative technological solutions
                </label><br>
                <label>
                    <input type="radio" name="q4" value="For gardening"> For gardening
                </label><br>
                <label>
                    <input type="radio" name="q4" value="For cooking recipes"> For cooking recipes
                </label><br>
            </form>
        </div>
        <div class="navigation">
            <button onclick="showPrevious()">Previous</button>
            <button onclick="submitResponses()">Submit</button>
        </div>
    </div>

    <script>
        const fullText = "Introduction to Computer Science: Computer science is the study of computation, automation, and information. It involves the theory of computation, algorithms, data structures, computer and network design, and artificial intelligence. Understanding these concepts is crucial for developing efficient and innovative technological solutions. Computer science spans several core areas including programming, systems architecture, databases, and software engineering. Additionally, fields like artificial intelligence, machine learning, and data science have grown significantly in recent years. By mastering computer science principles, you can develop software that solves real-world problems, create systems that drive the future of technology, and contribute to advancements in numerous industries.";
        const enhancedText = "Introduction to Computer Science: <b>Computer science</b> is the study of <b>computation</b>, <b>automation</b>, and <b>information</b>. It involves the theory of <b>computation</b>, <b>algorithms</b>, <b>data structures</b>, <b>computer and network design</b>, and <b>artificial intelligence</b>. Understanding these concepts is crucial for developing efficient and innovative technological solutions. Computer science spans several core areas including <b>programming</b>, <b>systems architecture</b>, <b>databases</b>, and <b>software engineering</b>. Additionally, fields like <b>artificial intelligence</b>, <b>machine learning</b>, and <b>data science</b> have grown significantly in recent years. By mastering computer science principles, you can develop software that solves real-world problems, create systems that drive the future of technology, and contribute to advancements in numerous industries.";
        const emotionText = "Hello everyone! 😊 Welcome to our session. I am excited 😄 to share this with you. The results are surprising 😲. We should be cautious 😟 with our conclusions. Thank you for your attention. 🙏";
        
        const captions = fullText.split(' ').map(word => ({ text: word, emotion: "neutral" }));
        const enhancedCaptions = enhancedText.split(' ').map(word => {
            return { text: word.replace(/<b>|<\/b>/g, ''), emotion: "neutral", bold: /<b>/.test(word) };
        });
        const emotionCaptions = emotionText.split(' ').map(word => {
            let emotion = "neutral";
            if (/😊|😄/.test(word)) emotion = "happy";
            else if (/😲/.test(word)) emotion = "surprised";
            else if (/😟/.test(word)) emotion = "sad";
            else if (/🙏/.test(word)) emotion = "thankful";
            return { text: word, emotion };
        });

        function displayCaption(captionBox, textArray, index = 0) {
            if (index < textArray.length) {
                setTimeout(() => {
                    const { text, emotion } = textArray[index];
                    const span = document.createElement('span');
                    span.classList.add('caption-text', `emotion-${emotion}`);
                    span.textContent = text;
                    captionBox.appendChild(span);
                    captionBox.scrollTop = captionBox.scrollHeight; // Scroll to bottom
                    displayCaption(captionBox, textArray, index + 1);
                }, 500); // Adjust the speed of the captions here
            }
        }

        function displayFlowingCaption(captionBox, text) {
            const words = text.split(' ');
            let line = [];
            let index = 0;

            function addLine() {
                if (index < words.length) {
                    line.push(words[index]);
                    index++;
                    if (line.length === 7 || index === words.length) {
                        const span = document.createElement('span');
                        span.classList.add('caption-text');
                        span.textContent = line.join(' ');
                        captionBox.appendChild(span);
                        captionBox.appendChild(document.createElement('br'));
                        captionBox.scrollTop = captionBox.scrollHeight; // Scroll to bottom
                        line = [];
                        setTimeout(addLine, 1000); // Adjust the speed of the captions here
                    } else {
                        setTimeout(addLine, 0);
                    }
                }
            }

            addLine();
        }

        function displayEnhancedCaption(captionBox, textArray, index = 0) {
            if (index < textArray.length) {
                setTimeout(() => {
                    const { text, emotion, bold } = textArray[index];
                    const span = document.createElement('span');
                    span.classList.add('caption-text', `emotion-${emotion}`);
                    if (bold) span.classList.add('bold');
                    span.textContent = text;
                    captionBox.appendChild(span);
                    captionBox.scrollTop = captionBox.scrollHeight; // Scroll to bottom
                    displayEnhancedCaption(captionBox, textArray, index + 1);
                }, 500); // Adjust the speed of the captions here
            }
        }

        function displayEmotionCaption(captionBox, textArray, index = 0) {
            if (index < textArray.length) {
                setTimeout(() => {
                    const { text, emotion } = textArray[index];
                    const span = document.createElement('span');
                    span.classList.add('emotion-text', `emotion-${emotion}`);
                    span.textContent = text;
                    captionBox.appendChild(span);
                    captionBox.scrollTop = captionBox.scrollHeight; // Scroll to bottom
                    displayEmotionCaption(captionBox, textArray, index + 1);
                }, 500); // Adjust the speed of the captions here
            }
        }

        window.onload = () => {
            const pages = ['page1', 'page2', 'page3', 'page4'];
            const shuffledPages = pages.sort(() => 0.5 - Math.random());

            shuffledPages.forEach((pageId, index) => {
                const page = document.getElementById(pageId);
                page.classList.remove('active');
                document.body.appendChild(page);
                if (index === 0) {
                    page.classList.add('active');
                }
            });

            displayCaption(document.getElementById('captionBox1'), captions);
            displayFlowingCaption(document.getElementById('captionBox2'), fullText);
            displayEnhancedCaption(document.getElementById('captionBox3'), enhancedCaptions);
            displayFlowingEmotionCaption(document.getElementById('captionBox4'), emotionCaptions);
        };

        function showPrevious() {
            const activePage = document.querySelector('.container.active');
            const prevPage = activePage.previousElementSibling;
            if (prevPage && prevPage.classList.contains('container')) {
                activePage.classList.remove('active');
                prevPage.classList.add('active');
            }
        }

        function showNext() {
            const activePage = document.querySelector('.container.active');
            const nextPage = activePage.nextElementSibling;
            if (nextPage && nextPage.classList.contains('container')) {
                activePage.classList.remove('active');
                nextPage.classList.add('active');
            }
        }

        async function submitResponses() {
            const quiz1Response = document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : "No response";
            const quiz2Response = document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : "No response";
            const quiz3Response = document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : "No response";
            const quiz4Response = document.querySelector('input[name="q4"]:checked') ? document.querySelector('input[name="q4"]:checked').value : "No response";

            const responses = {
                q1: quiz1Response,
                q2: quiz2Response,
                q3: quiz3Response,
                q4: quiz4Response
            };

            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyK-dH8f7swK_gKCB2GyAgno-W7ul4ZYdpUe_3Uh2ECf26TxBQVqTzyiPQq_TeR7l_7DA/exec', { // Replace with your Web App URL
                    method: 'POST',
                    body: JSON.stringify(responses),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('Your responses have been submitted successfully!');
                } else {
                    const responseBody = await response.text();
                    alert(`There was an error submitting your responses. Please try again. Response: ${responseBody}`);
                }
            } catch (error) {
                alert(`There was an error submitting your responses. Please try again. Error: ${error}`);
            }
        }

        function displayFlowingEmotionCaption(captionBox, textArray) {
            let index = 0;
            let line = [];
            
            function addLine() {
                if (index < textArray.length) {
                    line.push(textArray[index]);
                    index++;
                    if (line.length === 7 || index === textArray.length) {
                        const span = document.createElement('span');
                        span.classList.add('emotion-text');
                        line.forEach(wordObj => {
                            const wordSpan = document.createElement('span');
                            wordSpan.classList.add(`emotion-${wordObj.emotion}`);
                            wordSpan.textContent = wordObj.text + ' ';
                            span.appendChild(wordSpan);
                        });
                        captionBox.appendChild(span);
                        captionBox.appendChild(document.createElement('br'));
                        captionBox.scrollTop = captionBox.scrollHeight; // Scroll to bottom
                        line = [];
                        setTimeout(addLine, 1000); // Adjust the speed of the captions here
                    } else {
                        setTimeout(addLine, 0);
                    }
                }
            }

            addLine();
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
    </script>
</body>
</html>
