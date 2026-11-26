---
tipo: competenza
area: finanza
corsi: [Prova finale]
livello: [triennale]
aliases: ["rolling volatility", "volatilità storica mobile", "volatilità su finestra mobile", "moving window volatility", "volatilità annualizzata", "annualized volatility", "radice di 252"]
tags: [competenza, area/finanza]
---

# Volatilità rolling

> Deviazione standard dei rendimenti su una finestra mobile, annualizzata con $\sqrt{252}$: misura dinamica del rischio. Nella tesi la copula è stimata sulle volatilità rolling di Open e Close, non sui rendimenti.

## Definizione / enunciato
Con finestra di $w$ osservazioni,
$$\hat\sigma_t=\sqrt{252}\cdot\operatorname{sd}\big(r_{t-w+1},\dots,r_t\big),$$
in Python `returns['r1'].rolling(window=21).std() * np.sqrt(252)`. La finestra $w=21$ è pensata come "circa un mese di trading" e 252 come i giorni di trading in un anno (§5.3.2, parte 2).

## Formule chiave
- Annualizzazione: $\sigma_{\text{annua}}=\sigma_{\text{periodo}}\sqrt{252}$; nella simulazione si fa il passo inverso, $\sigma/\sqrt{252}$ per il giorno (§6.1.3).
- Per dataset con più di 50000 righe si campiona una riga ogni $\lfloor n/50000\rfloor+1$, per ridurre il costo computazionale.

## Intuizione
Una sola volatilità per tutto il campione nasconde il fatto che il rischio cambia nel tempo; la finestra mobile ne segue l'evoluzione. L'obiettivo dichiarato è modellare "come la volatilità di un asset dipende dalla volatilità di un altro", utile per gestione del rischio e stress test.

## Come si usa
Sui dati del DAX la tesi riporta volatilità media 0.56% per Open e 0.58% per Close; nella simulazione di portafoglio usa 0.79% e 0.81% "dal calcolo della volatilità rolling" (tab. 6.1). Le volatilità sono poi rese uniformi con i ranghi e su di esse si stimano tutte le copule: Pearson 0.8873, Kendall 0.6598, Spearman 0.8424 (tab. 5.6). Nota: i dati sono al minuto, quindi la "finestra di 21 giorni" e il fattore $\sqrt{252}$ sono applicati a righe al minuto (campionate), non a giorni.

## Nei corsi
- **Prova finale** (triennale): §5.3.2 "Calcolo della volatilità rolling". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.3.2, pp. 68-69; §6.1.1, p. 93); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/copula-analysis.py` (sezione 3; previsione con GARCH(1,1) nella sezione 12).

## Prerequisiti
- [[Rendimenti logaritmici]]: la volatilità è la loro deviazione standard
- [[Varianza]]: deviazione standard su finestra

## Porta a
- [[Pseudo-osservazioni]]: ranghi delle volatilità
- [[Stima delle copule sul DAX]]: variabili su cui si stimano le copule
- [[Rischio e rendimento di un portafoglio]]: volatilità dei singoli asset

## Collegati
- Modello GARCH (non trattato nei corsi): negli script si stima un GARCH(1,1) con la libreria `arch` per prevedere la volatilità a 22 passi, senza formule né risultati nella tesi
