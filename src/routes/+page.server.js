import fs from 'fs/promises';
import path from 'path';

/**
 * @type {any}
 */
export const load = async () => {
    const dataPath = path.resolve('static/files.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const images = JSON.parse(data).images

    return {
        images: images
    }
}
