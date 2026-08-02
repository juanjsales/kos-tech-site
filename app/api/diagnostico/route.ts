import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, tipoEmpresa, desafio } = body;

    // Input validation
    if (!nome || !email || !desafio) {
      return NextResponse.json(
        { error: 'Campos obrigatórios ausentes (nome, email, desafio).' },
        { status: 400 }
      );
    }

    const payload = {
      timestamp: new Date().toISOString(),
      nome,
      email,
      tipoEmpresa: tipoEmpresa || 'Não especificado',
      desafio
    };

    console.log('[KOS_DIAGNOSTICO_WEBHOOK] Solicitação recebida:', payload);

    // If DISCORD_WEBHOOK_URL or TELEGRAM_BOT_TOKEN environment variable exists, forward request
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhookUrl) {
      try {
        await fetch(discordWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **Nova Solicitação de Diagnóstico Técnico KOS!**\n• **Nome**: ${nome}\n• **E-mail**: ${email}\n• **Tipo**: ${tipoEmpresa}\n• **Desafio**: ${desafio}`
          })
        });
      } catch (err) {
        console.error('[KOS_DIAGNOSTICO_WEBHOOK] Erro ao enviar para o Discord:', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Diagnóstico técnico recebido com sucesso!',
        data: payload
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[KOS_DIAGNOSTICO_API_ERROR]:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar diagnóstico.' },
      { status: 500 }
    );
  }
}
