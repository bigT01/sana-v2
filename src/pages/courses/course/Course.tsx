import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandableTableOfContents from "../../../components/table/ExpandableTableOfContents";


const contents = [
    { title: 'Introduction', content: 'Overview of the course and objectives.' },
    { title: 'Preparing the character', content: 'Steps to set up your character in Blender.' },
]

const Course = () => {
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>

            <Box sx={{display: 'grid', gridTemplateColumns: '3fr 2fr', gridColumnGap: '3rem'}}>
                <Box content={'div'} sx={{width: '100%'}}>
                    <img src="/React.png" alt="img:React"
                         style={{width: '100%', borderRadius: '2rem', marginBottom: '2rem'}}/>
                    <Typography component="h6" variant="h6" fontWeight={550} color={'primary'} fontSize={16}
                                sx={{mb: 2}}>
                        <b style={{opacity: 0.5, color: '#000000'}}>Category: </b> Frontend development
                    </Typography>
                    <Typography component="h1" variant="h2" fontWeight={550} sx={{mb: 2}}>
                        Frontend Development: with React
                    </Typography>
                    <Typography component="p" variant="body1" paragraph={true} fontWeight={550} sx={{mb: 3}}>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                        <br/>
                        <br/>
                        Why do we use it?<br/>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                        <br/>
                        <br/>
                        Where does it come from?br
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.
                    </Typography>
                    <ExpandableTableOfContents title="COURSE TABLE OF CONTENTS" items={contents} />
                </Box>

            </Box>

        </Box>
    );
};

export default Course;