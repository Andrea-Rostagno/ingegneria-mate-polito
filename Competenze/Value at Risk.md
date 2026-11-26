---
tipo: competenza
area: finanza
corsi: [Prova finale, Financial engineering]
livello: [triennale, magistrale]
aliases: ["VaR", "valore a rischio", "VaR 5%", "VaR_alpha", "perdita massima a un livello di confidenza", "VaR Monte Carlo", "VaR gaussiano", "VaR storico", "perdita di un portafoglio"]
tags: [competenza, area/finanza]
---

# Value at Risk

> Perdita massima stimata di un portafoglio su un orizzonte dato e a un dato livello di confidenza: è un quantile della distribuzione del valore (o della perdita) del portafoglio.

## Definizione / enunciato
Tesi §3.2.2: "la perdita massima stimata che un portafoglio potrebbe subire in un determinato orizzonte temporale e con un dato livello di confidenza". Nella simulazione (§6.1.3) il VaR al 5% è il 5° percentile del valore finale simulato del portafoglio:
$$\mathrm{VaR}_{5\%}=\mathrm{Percentile}_5\big(P_T^{(portafoglio)}\big).$$
In Python: `np.percentile(final_portfolio_values, 5)`.

## Formule chiave
- Perdita percentuale corrispondente nel codice: $(\mathrm{VaR}_{5\%}/P_0-1)\cdot100$. Attenzione al segno: è positiva quando il 5° percentile sta sopra $P_0$, e in quel caso è un guadagno, non una perdita.
- Incoerenza interna della tesi (da verificare sul PDF): in §3.2.2 il VaR è una **perdita** massima, in §6.1.3 è il 5° percentile del **valore** finale; le due letture coincidono solo passando alla perdita $P_0-P_T$, cosa che il codice non fa.
- Interpretazione del grafico (fig. 6.3): il VaR 5% è "il valore che il portafoglio raggiunge o supera nel 95% dei casi".

## Intuizione
È una soglia, non una media: dice quanto si può perdere nel 95% dei casi, ma nulla sull'entità delle perdite oltre la soglia (per quello serve l'Expected Shortfall). In presenza di dipendenza di coda, un VaR calcolato con l'ipotesi normale **sottostima** il rischio, perché la normale non vede abbastanza eventi estremi congiunti; con le copule la stima è più accurata (§3.2.2).

## Come si usa
Portafoglio a massimo Sharpe simulato con copula gaussiana, 10000 scenari, 252 giorni, $P_0=100$ (tab. 6.3): valore finale atteso 107.76 (rendimento 7.76%), $\mathrm{VaR}_{5\%}=106.32$, che il codice etichetta come "perdita massima 6.32%". Poiché 106.32 è sopra il valore iniziale, nel 95% degli scenari il portafoglio guadagna almeno il 6.32%: la quantità riportata è un rendimento al 5° percentile, non una perdita (osservazione mia sui numeri della tabella). Le copule servono anche a stimare VaR e CVaR in mercati volatili con la stima bayesiana (§5.2.7).

## Nei corsi
- **Prova finale** (triennale): §3.2.2 "Importanza nel VaR e nell'Expected Shortfall" e §6.1.3 "Analisi delle statistiche di rischio". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (p. 22; pp. 102-104, 107); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/long-portfolio-simulations.py`; `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 6, $\mathrm{VaR}_\alpha$ del valore del portafoglio).
- **Financial engineering** (magistrale): perdita $L=-\ln\frac{V(t+h)}{V(t)}$ (o rispetto all'investimento non rischioso $V(0)e^{rT}-V(T)$, def. c21-perdita); con $\alpha$ = livello di confidenza (0.95, 0.99) $\mathrm{VaR}_\alpha(L)=\inf\{l:\mathbb P(L<l)\ge\alpha\}$, il quantile di livello $\alpha$ della perdita (def. c21-var, prop. c21-var-quantile). **Caso gaussiano** (prop. c21-var-gaussiano): $L\sim\mathcal N(\mu_L,\sigma_L^2)\Rightarrow\mathrm{VaR}_\alpha=\mu_L+\sigma_Lz_\alpha$ (moltiplicatori 1.6449 al 95%, 2.3263 al 99%). Esempio: $L\sim\mathcal N(-0.5\%,2\%^2)$: $\mathrm{VaR}_{0.95}=2.79\%$, $\mathrm{VaR}_{0.99}=4.15\%$. **Posizione monotona** (prop. c21-var-monotono): se $L=c-\varphi(S)$ con $\varphi$ crescente, $\mathrm{VaR}_\alpha=c-\varphi(q_{1-\alpha}(S))$. Il VaR non dice nulla sulla coda e non è subadditivo; VaR storico come quantile empirico (dipende dall'interpolazione del software). La tabella della lezione indicizza con $1-\alpha$. Fonti: `Libri/Financial engineering/capitoli/cap21.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/40 - 28 aprile a - Lezione Risk measures VaR1.pdf`.

## Prerequisiti
- [[Campione casuale]]: quantile campionario dei valori simulati
- [[Simulazione da una copula]]: genera la distribuzione del valore finale
- [[Rischio e rendimento di un portafoglio]]: portafoglio di cui si misura il rischio

## Porta a
- [[Expected Shortfall]]: media oltre il VaR

## Collegati
- [[Dipendenza di coda]]: se ignorata, il VaR è sottostimato
- [[Metodo Monte Carlo]]: VaR stimato sugli scenari simulati
- [[Copule nel rischio di credito]]: VaR di portafogli con dipendenze complesse
- [[Misure di rischio coerenti]]: il VaR non è subadditivo (Financial engineering)
- [[Portafoglio gaussiano ottimo]]: portafoglio a VaR minimo (Financial engineering)
- [[Distribuzione normale]]: VaR gaussiano con il quantile $z_\alpha$ (Financial engineering)
