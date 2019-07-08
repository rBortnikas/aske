
interface

function SessionCreatedPage(props) {
  return (
    <>
      <SmallerTitle>People may now join the room by visiting</SmallerTitle>
      <h3>
        <a href={`http://quarrelsome-frog.surge.sh`}>www.aske.ly</a>
      </h3>
      <h4>or directly by</h4>
      <h3>
        <a href={`http://quarrelsome-frog.surge.sh/session/${sessionName}`}>
          www.aske.ly/{sessionName}
        </a>
      </h3>
      <h3>Afraid of forgetting? Send these details to yourself</h3>
      <InputField
        focusIndicator={false}
        value={sessionInfoText}
        onChange={e => { }}
        placeholder="your@email.com"
        size="large"
      />
      <ActionButton
        label="Send"
        color="#686DFF"
        primary
        focusIndicator={false}
        onClick={() => alert("work in progress :)")}
      />
    </>
  )
}

export default SessionCreatedPage;