
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Weather({ weather }) {
    if (!weather) {
        return <p>Search for a city to see its weather.</p>;
    }

    const temperature = weather.main.temp;
    const humidity = weather.main.humidity;

    
    const coldImage = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const hotImage = "https://images.unsplash.com/photo-1604949210966-9440c324823f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const rainyImage = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    
    let image;

    if (humidity > 60) {
        image = rainyImage;
    } else if (temperature < 20) {
        image = coldImage;
    } else {
        image = hotImage;
    }

    return (
        <Card
            sx={{
                maxWidth: 345,
                margin: "20px auto",
                borderRadius: 3,
                overflow: "hidden",
            }}
        >
            {/* Weather image above the card content */}
            <img
                src={image}
                alt={
                    humidity > 80
                        ? "Rainy weather"
                        : temperature < 15
                        ? "Cold weather"
                        : "Hot weather"
                }
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    display: "block",
                }}
            />

            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                >
                    {weather.name}
                </Typography>

                <Typography variant="h3" sx={{ my: 2 }}>
                    {Math.round(temperature)}°C
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        textTransform: "capitalize",
                        mb: 2,
                    }}
                >
                    {weather.weather[0].description}
                </Typography>

                <Typography variant="body1">
                    Feels like: {Math.round(weather.main.feels_like)}°C
                </Typography>

                <Typography variant="body1">
                    Humidity: {humidity}%
                </Typography>
            </CardContent>
        </Card>
    );
}
