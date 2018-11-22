class EmailController < ApplicationController
  def index
  end
  def subscribe
    EmailMeMailer.confirmation(params[:sub_email]).deliver_now

    respond_to do |format|
      format.json { head :ok }
    end
  end
end
