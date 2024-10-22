const { getAgent } = require('../data/data-helpers');
const Comment = require('../lib/models/Comments');

describe('make a test for the gram routes', () => {
  it('Allows user to POST a comment', async() => {
    return getAgent() 
      .post('/api/v1/comment')
      .send({ 
        userId: '1', 
        gramsId: '1', 
        comment: 'my first comment' 
      })
      .then(res => {
        expect(res.body).toEqual({ 
          id: '1',
          userId: '1', 
          gramsId: '1', 
          comment: 'my first comment' 
        });
      });
  });

  it('will delete a darn comment', async() => {
    const commentResponse = await Comment.findById(1);
    
    const res = await getAgent()
      .delete(`/api/v1/comment/${commentResponse.body.id}`);
    
    expect(res.body).toEqual(commentResponse.body);   
  });
});
