Feature: Editar miembro

@user1 @web
Scenario: Limpiar mensajes de error
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    And I take a screenshot '/version441/screenshot20-1'
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot20-2'
    And I enter password '12345678910'
    And I click next
    And I wait for 4 seconds
    And I take a screenshot '/version441/screenshot20-3'
    And I go to the members list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot20-4'
    And I select the first member
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot20-5'
    And I enter note '¿QuéesLoremIpsum?LoremIpsumessimplementeeltextoderellenodelasimprentasyarchivosdetexto.LoremIpsumhasidoeltextoderellenoestándardelasindustriasdesdeelaño1500,cuandounimpresor(N.delT.personaquesededicaalaimprenta)desconocidousóunagaleríadetextosylosmezclódetalmaneraquelogróhacerunlibrodetextosespecimen.Nosólosobrevivió500años,sinoquetambieningresócomotextoderellenoendocumentoselectrónicos,quedandoesencialmenteigualaloriginal.Fuepopularizadoenlos60sconlacreacióndelashojasLetraset,lascualescontenianpasajesdeLoremIpsum,ymásrecientementeconsoftwaredeautoedición,comoporejemploAldusPageMaker,elcualincluyeversionesdeLoremIpsum.¿Porquélousamos?'
    And I click on save
    And I wait for 1 seconds
    And I take a screenshot '/version441/screenshot20-6'
    Then I expect to see the error message
    And I wait for 1 seconds
    And I take a screenshot '/version441/screenshot20-7'
    And I go to the members list
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot20-8'
    And I click leave
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot20-9'
    And I select the first member
    And I wait for 2 seconds
    And I take a screenshot '/version441/screenshot20-10'
    And I expect to the error message hidden