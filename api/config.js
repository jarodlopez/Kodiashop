export default function handler(req, res) {
    const projectId = process.env.FIREBASE_PROJECT_ID || '';
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.json({
        apiKey:        process.env.FIREBASE_API_KEY || '',
        authDomain:    projectId ? `${projectId}.firebaseapp.com` : '',
        projectId,
        storageBucket: projectId ? `${projectId}.firebasestorage.app` : '',
        imgbbApiKey:   process.env.IMGBB_API_KEY || '',
    });
}
