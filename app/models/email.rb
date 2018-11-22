class Email < ApplicationRecord
  attribute :objet, :body,
  all_true = items.readx(:conditions => [ 'bool_column = ? or bool_column is null', false ]) == 0
end
