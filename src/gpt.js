async function fetchChatCompletion(apiKey, userInput) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const body = JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: '당신의 역할은 텍스트를 읽고 교정하는 것입니다.' },
            { role: 'system', content: '구어체로 말하세요.' },
            { role: 'user', content: userInput }
        ]
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        return '오류가 발생했습니다. 다시 시도하세요.';
    }
}

document.getElementById('correctionForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const userInput = document.getElementById('userInput').value; // 사용자 입력 가져오기
    const apiKey = ''
    const result = await fetchChatCompletion(apiKey, userInput);
    document.getElementById('result').innerText = result;
});
