### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

  # checkforAce => check_for_ace (style guide only, not functional fix)
  def checkforAce(card)  
    if card.value = 1  # = => ==
      return true
    else
      return false
    end
  end

  # dif => def
  dif highest_card(card1 card2)  # (card1 card2) => (card1, card2)
  if card1.value > card2.value  # indentation error until line 26 (indent by 1 more)
    return card  # card => card1
  else
    return card2
  end
end
end  

# class method outside of class definition => define inside CardGame
def self.cards_total(cards)
  total  # total => total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total  # of" + total => of " + total.to_s; swap line 33 and 34
  end
end
```
