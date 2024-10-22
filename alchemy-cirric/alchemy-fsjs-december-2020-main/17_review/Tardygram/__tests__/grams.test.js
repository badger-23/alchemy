const { getAgent, getLoggedInUser } = require('../data/data-helpers');
const Comment = require('../lib/models/Comments');
const Gram = require('../lib/models/Gram');

describe('make a test for the gram routes', () => {
  //POST TEST
  it('Allows user to POST a gram', async() => {
    const user = await getLoggedInUser();
    return getAgent() 
      .post('/api/v1/gram')
      .send({ 
        userId: user.id,
        photoUrl: 'http://test.text.com', 
        caption: 'caption example',
        tags: [{
          tag1: 'tag1text',
          tag2: 'tag2text'
        }]
      })
      .then(res => {
        expect(res.body).toEqual({ 
          id: expect.any(String),
          userId: user.id,
          photoUrl: 'http://test.text.com', 
          caption: 'caption example',
          tags: [{
            tag1: 'tag1text',
            tag2: 'tag2text'
          }] 
        });
      });
      
  });

  ////DELETE TEST    

  it('removes a post', async() => {
    const user = await getLoggedInUser();
    const gramResponse =
     await getAgent() 
       .post('/api/v1/gram')
       .send({ 
         userId: user.id,
         photoUrl: 'http://test.text.com', 
         caption: 'caption example',
         tags: [{
           tag1: 'tag1text',
           tag2: 'tag2text'
         }] 
       });
      //  console.log(gram);
    const res = await getAgent()
      .delete(`/api/v1/gram/${gramResponse.body.id}`);
  
    expect(res.body).toEqual(gramResponse.body);

  });
  //////////////////UPDATES GRams
  it('updates via patch', async() => {
    const user = await getLoggedInUser();
    const gram =
    await getAgent() 
      .post('/api/v1/gram')
      .send({ 
        userId: user.id,
        photoUrl: 'http://test.text.com', 
        caption: 'caption example',
        tags: [{
          tag1: 'tag1text',
          tag2: 'tag2text'
        }] 
      });

    const res = await getAgent()
      .patch(`/api/v1/gram/${gram.body.id}`)
      .send({
   
        caption: 'caption update',
   
      
      });
      // console.log(...gram);
    expect(res.body).toEqual({ ...gram.body,

      id: '1',
      caption: 'caption update',
 
     
    });
  });
  // FindBYId test
  it('should find one gram by id, with comments', async() => {
    const user = await getLoggedInUser();
    const gram =
    await getAgent() 
      .post('/api/v1/gram')
      .send({ 
        userId: user.id,
        photoUrl: 'http://test.text.com', 
        caption: 'caption example',
        tags: [{
          tag1: 'tag1text',
          tag2: 'tag2text'
        }] 
      });
      
    await Promise.all([
      { userId: '1', gramsId: '1', comment: 'my first comment' },
      { userId: '1', gramsId: '1', comment: 'my 2nd comment' },
      { userId: '1', gramsId: '1', comment: 'my 3rd comment' },
      { userId: '1', gramsId: '1', comment: 'my 4th comment' }
    ].map(comment => Comment.insert(comment)));
    const res = await getAgent()
      .get(`/api/v1/gram/${gram.body.id}`);
    expect(res.body).toEqual({
      ...gram.body, comments: expect.arrayContaining([ 
        { 'comment': 'my first comment', },
        { 'comment': 'my 3rd comment', },
        { 'comment': 'my 2nd comment', },
        { 'comment': 'my 4th comment', }
      ])
    });      
  });
  //findTopTen test
  it('finds the top 10 popular grams by comments', async() => {
    const grams = await Gram.find();
    
    const res = await getAgent()
      .get('/api/v1/gram/topTen');

    expect(res.body).toEqual(grams.slice(0, 10));
  });
});


