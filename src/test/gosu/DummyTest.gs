uses org.junit.Assert
uses org.junit.Test

class DummyTest {

  @Test
  function makesDummy() {
    Assert.assertNotNull(new Dummy())
  }
}