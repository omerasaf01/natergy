import React, { useState } from "react";
import { Card, Group, Text, Button, Badge } from "@mantine/core";

export default function PostCard({ name, description, id, category}) {
    const [state, setState] = useState();
    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{name}</Text>
                    <Badge color="pink" >
                        {category}
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                    {description}
                </Text>

                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt={50}
                    radius="md"
                    component="a"
                    href={"/discusion/" + id}
                >
                    Görüntüle
                </Button>
            </Card>
        </>
    );
}
