class StaticPagesController < ApplicationController
  include AgentDetector

  def home
    if number=params[:number]
      #sleep 1.5
      if agent?(number)#[true,false].sample
        @output_class = "red"
        @btn_class = "btn-danger"
        @alert_class = "alert-error"
        @primary_text = t('agent.primary_text')
        @secondary_text = t('agent.secondary_text')
      else
        @output_class = "green"
        @btn_class = "btn-success"
        @alert_class = "alert-success"
        @primary_text = t('not_agent.primary_text')
        @secondary_text = t('not_agent.secondary_text')
      end
      @call_text = "#{t('call_text')} #{params[:number]}"
      @tel_link = "tel:#{params[:number]}"
    else
      params[:number]=t('number_beginning')
    end
  end

  def help
  end

  def about
  end
end
