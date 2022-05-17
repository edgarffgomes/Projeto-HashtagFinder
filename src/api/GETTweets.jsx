const getTweets = async (searchValue, moreRequest) => {
  const url = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${searchValue}%20has:hashtags%20&max_results=${moreRequest}&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url`;

  const token =
    'AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX';

  const myHeaders = new Headers();

  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();

  console.log(body);
  return body;
};

export { getTweets };
