describe('Javascript AJAX functions with Jest', () => {
  const mockUrl = 'https://5dc588200bbd050014fb8ae1.mockapi.io/assessment';
  const mockUsers = [{"id":"16","createdAt":"2021-03-31T13:24:14.020Z","name":"Ryann Wiegand","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg"}];
  const getUsers = jest.fn(url => mockUsers);
  it('returns returns users from an api call', () => {
    expect(getUsers(mockUrl)).toBe(mockUsers);
    console.log(getUsers);
  });
  it('called getUser with a mockUrl', () => {
    expect(getUsers).toHaveBeenCalledWith(mockUrl);
  });
});
