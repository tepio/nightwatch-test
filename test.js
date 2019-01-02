module.exports = {
  'Demo test Google' : function (client) {
    const button = 'input[value="Google Search"]'

    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Hello there!')
      .waitForElementVisible(button, 1000)
      .click(button)
      .pause(1000)
      // .assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
      .end();
  }
};
