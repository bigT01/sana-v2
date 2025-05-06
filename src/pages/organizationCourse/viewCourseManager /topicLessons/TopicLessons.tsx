import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../../../store/useStore";
import { IState, ITopicWithLessons } from "../../../../constants/interfaces";

const TopicLessons = () => {
    const getLessonsByTopicId = useStore((state: IState) => state.getLessonsByTopicId)

    const params = useParams();

    const [data, setData] = useState<ITopicWithLessons | null>()

     useEffect(() => {
        const fetchCourses = async () => {
            if(params?.topicId){
                try {
                    const data = await getLessonsByTopicId(params.topicId); // Ожидаем завершения асинхронной операции
                    if (data) {
                        setData(data); // Устанавливаем данные в состояние
                    }
                } catch (error) {
                    console.error("Failed to fetch courses:", error);
                    setData(null); // Обрабатываем ошибку, например, сбрасываем состояние
                 }
            }
        }
        fetchCourses();
    }, [params])

    return(
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {data ? (
                <>
                    <Typography component="h2" variant="h4" sx={{mb: 2}}>
                            {data.name}
                        </Typography>      
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                        <Typography component="h2" variant="h5" sx={{mb: 1}}>
                            Lessons
                        </Typography>
                    </Box>
                    <Box sx={{display: 'grid', gridTemplateColumns: "1fr 1fr 1fr ", gap: '2rem'}}>
                    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      sx={{mb: 1}}
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLs-VUI3QCuobhbhRQqJxArBq8NlwzN8cuA&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">View</Button>
        <Button color="info" size="small">Delete</Button>
      </CardActions>
    </Card>
                    </Box>
                </>
            ) : "there is no course with this id"}
        </Box>
    )
}

export default TopicLessons