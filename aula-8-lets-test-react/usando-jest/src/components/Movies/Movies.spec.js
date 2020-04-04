import video from './Movies';

test('plays video', () => {
    const spyPlay = jest.spyOn(video, 'play');
    video.play();

    expect(spyPlay).toHaveBeenCalled();
});