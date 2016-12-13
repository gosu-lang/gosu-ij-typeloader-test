uses org.junit.Assert
uses org.junit.Test
uses xml.example.sample.PurchaseOrder

class DummyTest {

  @Test
  function makesDummy() {
    var dummy = new Dummy()
    Assert.assertNotNull(dummy)
    Assert.assertNull(dummy.PO)
    var testPO = new PurchaseOrder()
    testPO.BillTo.Name = "Fred"
    dummy.PO = testPO
    Assert.assertNotNull(dummy.PO)
    Assert.assertEquals("Fred", dummy.PO.BillTo.Name)
    print("Tested: " + dummy.PO.BillTo.Name)
  }
}