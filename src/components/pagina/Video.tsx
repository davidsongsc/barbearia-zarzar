import React, { useEffect, useState } from 'react';
import VimeoPlayer from '@vimeo/player';

const VideoPlayer: React.FC = () => {
    const [isVideoEnded, setVideoEnded] = useState(false);
    const [videoWidth, setVideoWidth] = useState(640); // Defina o tamanho inicial
    const [videoHeight, setVideoHeight] = useState(360); // Defina o tamanho inicial
    let vimeoPlayer: any = null; // Use any para evitar erros de tipo

    useEffect(() => {
        // Crie um novo player do Vimeo quando o componente montar
        vimeoPlayer = new VimeoPlayer('vimeo-player', {
            id: parseInt('869557564', 10),
            autoplay: true,
            muted: true,
            controls: false,
            loop: true, // Ative o loop de reprodução
            
        });

        // Adicione um ouvinte de evento para detectar quando o vídeo termina
        vimeoPlayer.on('ended', () => {
            // Alterar o tamanho do vídeo (por exemplo, para 200x200)
            setVideoWidth(200);
            setVideoHeight(200);

            // Marcar o vídeo como terminado
            setVideoEnded(true);
        });

        // Remova o ouvinte de evento quando o componente for desmontado
        return () => {
            if (vimeoPlayer) {
                vimeoPlayer.off('ended');
                vimeoPlayer.destroy().catch((error: Error) => {
                    console.error('Erro ao descarregar o player do Vimeo:', error);
                });
            }
        };
    }, []);

    return (
        <>
            <div id="vimeo-player"></div>
            {isVideoEnded && (
                <p>Confira este e outros cortes em nossas mídias sociais.</p>
            )}
        </>
    );
};

export default VideoPlayer;
