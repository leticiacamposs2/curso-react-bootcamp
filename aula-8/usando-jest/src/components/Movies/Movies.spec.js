import video from './Movies';

test('plays video', () => {
    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalledTimes(1);
});