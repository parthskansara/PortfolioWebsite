import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const TopicCard = ({topic}) => {
    return (
        <div className="topic-card flex px-4 mx-8 mt-8">
            <Card className="border-2 border-black py-2">
                <CardHeader>
                    <CardTitle className="text-lg">{topic.name}</CardTitle>
                    <CardDescription className='text-md pb-4'>
                        {topic.description}
                    </CardDescription>
                </CardHeader>
                
            </Card>
        </div>
    );
}

export default TopicCard;