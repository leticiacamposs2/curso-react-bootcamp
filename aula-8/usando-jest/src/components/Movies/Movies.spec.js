import video from './Movies';

test('plays video', () => {
    const spyPlay = jest.spyOn(video, 'play');
    video.play();

    expect(spyPlay).toHaveBeenCalled(); //so quero que seja chamado independente da quantidade de vezes
    // expect(spyPlay).toHaveBeenCalledTimes(1); //espero que seja chamado 2 vezes
});