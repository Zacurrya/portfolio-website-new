export const techIcons: { [key: string]: string } = {
    "Next.js": "nextjs",
    "Prisma": "prisma",
    "PostgreSQL": "postgres",
    "FastAPI": "fastapi",
    "PyTorch": "pytorch",
    "OpenCV": "opencv",
    "PHP": "php",
    "JavaScript": "js",
    "SQL": "mysql",
    "Apache": "apache",
    "React": "react",
    "Node.js": "nodejs",
    "Socket.io": "workers",
    "Python": "python",
    "Java": "java",
    "C#": "cs",
    "HTML/CSS": "html,css",
    "Streamlit": "python",
    "Plotly": "python",
    "YFinance": "python",
    "FinnHub": "python",
    "TKinter": "python",
    "TA-Lib": "python",
    "OandaPy": "python",
    "ResNet-50": "pytorch",
    "Unity": "unity",
};

/**
 * Groups project tags by their corresponding tech icons
 * @param tags - Array of technology tags
 * @returns Object mapping icon names to arrays of tag names
 */
export const groupTagsByIcon = (tags: string[]): { [key: string]: string[] } => {
    const iconGroups: { [key: string]: string[] } = {};

    tags.forEach(tag => {
        const icon = techIcons[tag];
        if (icon) {
            if (!iconGroups[icon]) {
                iconGroups[icon] = [];
            }
            iconGroups[icon].push(tag);
        }
    });

    return iconGroups;
};
