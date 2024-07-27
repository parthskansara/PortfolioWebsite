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
        <div className="topic-card flex px-4 mt-8">
            <Card>
                <CardHeader>{topic.name}</CardHeader>
                <CardDescription className='justify-center '>
                    {topic.description}
                </CardDescription>
            </Card>
        </div>
    );
}

export default TopicCard;