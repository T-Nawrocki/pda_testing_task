require "minitest/autorun"
require "minitest/reporters"
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

require_relative "card_game"
require_relative "card"

class TestCardGame < MiniTest::Test

  def setup
    @card_game = CardGame.new
    @card1 = Card.new("hearts", 6)
    @card2 = Card.new("clubs", 1)
    @cards = [@card1, @card2]
  end

  def test_can_check_for_ace__true
    assert(@card_game.check_for_ace(@card2))
  end

  def test_can_check_for_ace__false
    refute(@card_game.check_for_ace(@card1))
  end

  def test_can_get_highest_card
    assert_equal(@card1, @card_game.highest_card(@card1, @card2))
  end

  def test_can_get_total_card_value
    assert_equal("You have a total of 7", CardGame.cards_total(@cards))
  end

end
