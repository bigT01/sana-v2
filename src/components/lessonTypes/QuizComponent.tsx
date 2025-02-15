import { useState } from "react";
import { Typography, Button, Radio, RadioGroup, FormControlLabel, Card, CardContent } from "@mui/material";

interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

const quizQuestions: QuizQuestion[] = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: "JavaScript",
    },
];

const QuizComponent = () => {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (index: number, answer: string) => {
        setAnswers((prev) => ({ ...prev, [index]: answer }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Quiz
            </Typography>
            {quizQuestions.map((question, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography>{question.question}</Typography>
                        <RadioGroup
                            value={answers[index] || ""}
                            onChange={(e) => handleSelect(index, e.target.value)}
                        >
                            {question.options.map((option, optIndex) => (
                                <FormControlLabel
                                    key={optIndex}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                    disabled={submitted}
                                />
                            ))}
                        </RadioGroup>
                    </CardContent>
                </Card>
            ))}
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={submitted}>
                Submit
            </Button>
            {submitted && (
                <Typography variant="h6" color="success.main" sx={{ mt: 2 }}>
                    Quiz submitted!
                </Typography>
            )}
        </div>
    );
};

export default QuizComponent;
