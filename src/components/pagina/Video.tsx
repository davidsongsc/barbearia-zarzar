import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVideoEnded, setVideoEnded] = useState(false);
    const [videoWidth, setVideoWidth] = useState(120); // Defina o tamanho inicial
    const [videoHeight, setVideoHeight] = useState(120); // Defina o tamanho inicial

    useEffect(() => {
        // Verificar se o elemento de vídeo existe
        if (videoRef.current) {
            // Adicionar um ouvinte de evento para detectar quando o vídeo termina
            const videoElement = videoRef.current;

            const handleVideoEnded = () => {
                // Pausar a reprodução quando o vídeo terminar
                videoElement.pause();

                // Alterar o tamanho do vídeo (por exemplo, para 200x200)
                setVideoWidth(200);
                setVideoHeight(200);

                // Marcar o vídeo como terminado
                setVideoEnded(true);
            };

            videoElement.addEventListener('ended', handleVideoEnded);

            // Remover o ouvinte de evento quando o componente for desmontado
            return () => {
                videoElement.removeEventListener('ended', handleVideoEnded);
            };
        }
    }, []);

    return (
        <>
            <video width={videoWidth} height={videoHeight} autoPlay muted preload="auto" ref={videoRef}>
                {/* Adicione a URL do vídeo aqui */}
                <source src="https://dagesico.pythonanywhere.com/static/img/barbearia.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            {isVideoEnded && (
                <p>Confira este e outros cortes em nossas midias sociais.</p>
            )}
        </>
    );
};

export default VideoPlayer;
