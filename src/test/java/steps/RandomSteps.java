package steps;

import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class RandomSteps {
  @Given("user prints a random name")
  public void userPrintsARandomName() {
    Faker dataFaker = new Faker();
    System.out.println(dataFaker.address().city());
    System.out.println(dataFaker.avatar().image());
    System.out.println(dataFaker.backToTheFuture().date());
    System.out.println(dataFaker.dragonBall().character());
    System.out.println(dataFaker.howIMetYourMother().quote());
  }

  @And("user prints a random address")
  public void userPrintsARandomAddress() {

  }

  @And("user prints a random quote")
  public void userPrintsARandomQuote() {

  }
}
