---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Fourier transform of tempered distributions", "trasformata di Fourier distribuzionale", "trasformata di una costante", "trasformata della delta", "trasformata della funzione di Heaviside", "trasformata del segno"]
tags: [competenza, area/analisi]
---

# Trasformata di Fourier di distribuzioni temperate

> Per $T\in\mathcal S'$ si pone $\langle\hat T,\varphi\rangle=\langle T,\hat\varphi\rangle$: così si trasformano anche segnali non sommabili come costanti, $H(t)$, $\mathrm{sign}\,t$, la delta e il treno di impulsi.

## Definizione / enunciato
**Definizione 5.23.** Se $T\in\mathcal S'(\mathbb R)$:
$$\langle\mathcal F(T),\varphi\rangle:=\langle T,\mathcal F(\varphi)\rangle,\qquad\varphi\in\mathcal S(\mathbb R)\quad(5.33).$$
$\mathcal F(T)\in\mathcal S'$ (Prop. 5.24) e per $g$ sommabile $\mathcal F(T_g)=T_{\mathcal F(g)}$ (Prop. 5.25): la definizione estende quella classica, grazie a Fubini. È invertibile su $\mathcal S'$ (Teor. 5.29).

## Formule chiave
- Prop. 5.26: $[\mathcal F(T)]^{(p)}=(-2\pi i)^p\mathcal F(t^pT)$, $\ \mathcal F(T^{(p)})(\nu)=(2\pi i\nu)^p\mathcal F(T)(\nu)$.
- Prop. 5.27: linearità, $\mathcal F(e^{2\pi i\nu_0t}T)(\nu)=\hat T(\nu-\nu_0)$, $\mathcal F(T(t-t_0))=e^{-2\pi it_0\nu}\hat T$, $\mathcal F(T(at))=\frac1{|a|}\hat T(\frac\nu a)$, $\mathcal F(T(-t))(\nu)=\hat T(-\nu)$.
- Tavola: $\mathcal F(\delta_{t_0})=e^{-2\pi it_0\nu}$, $\ \mathcal F(e^{2\pi i\nu_0t})=\delta_{\nu_0}$ (quindi $\mathcal F(1)=\delta_0$), $\ \mathcal F\big(\frac{\sin at}{t}\big)=\pi p_{a/\pi}(\nu)$.
- §5.6: $\mathcal F(\mathrm{v.p.}\frac1t)=-\pi i\,\mathrm{sign}\,\nu$, $\ \mathcal F(\mathrm{sign}\,t)=\frac1{\pi i}\mathrm{v.p.}\frac1\nu$, $\ \mathcal F(H)=\frac1{2\pi i}\mathrm{v.p.}\frac1\nu+\frac12\delta_0$ (5.52)-(5.54).

## Intuizione
Si sposta la trasformata sulla funzione test, come per la derivata. Così $\mathcal F$ scambia "localizzato" con "diffuso": un impulso $\delta$ ha tutte le frequenze con lo stesso peso, una costante ha una sola frequenza.

## Come si usa
Per le funzioni non sommabili si passa per un'equazione distribuzionale. Per $\mathrm{v.p.}\frac1t$: da $t\cdot\mathrm{v.p.}\frac1t=1$ si ottiene $\frac{-1}{2\pi i}\frac{d}{d\nu}\mathcal F(\mathrm{v.p.}\frac1t)=\delta_0$, quindi $\mathcal F(\mathrm{v.p.}\frac1t)=-\pi i\,\mathrm{sign}+C$, e $C=0$ per disparità. Le funzioni pari/dispari (Def. 5.41) hanno trasformate pari/dispari.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §5.5 "Trasformata di Fourier di distribuzioni temperate" e §5.6 "Calcolo di trasformate". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 5 (3).pdf` (pp. 14-26 del PDF); `formulario_analisi.pdf`; `12 - Trasformata di Fourier di Distribuzioni.pdf` (Richiami di teoria).
- **Equazioni di fisica matematica** (triennale): convenzione $\hat u(\xi,t)=\int_{-\infty}^{+\infty}u(x,t)e^{-i\xi x}dx$ (in $\xi$, senza $2\pi$), con $\mathcal F[\partial_x^2u]=(i\xi)^2\hat u$ e $\mathcal F[\delta_0]=1$. Trasformata notevole usata per antitrasformare: $\mathcal F(e^{-(ax)^2})(\xi)=\frac{\sqrt\pi}ae^{-\xi^2/4a^2}$, $a>0$; con $\frac1{4a^2}=Dt$ dà $\mathcal F^{-1}(e^{-D\xi^2t})=\frac1{\sqrt{4\pi Dt}}e^{-x^2/4Dt}$ (soluzione fondamentale del calore). Fonti: `triennale/ANNO 3/eq fisica matematica/26 - Lezione 12_12_23.pdf` (pp. 5-6); `triennale/ANNO 3/eq fisica matematica/27 - Lezione 13_12_23.pdf` (p. 1).

## Prerequisiti
- [[Distribuzioni temperate]]: trasformata definita per dualità
- [[Formula di inversione di Fourier]]: inversione in $\mathcal S'$

## Porta a
- [[Formula di sommazione di Poisson]]: trasformata del treno di impulsi
- [[Equazione del calore]]: trasformata nella variabile spaziale

## Collegati
- [[Delta di Dirac]]: $\mathcal F(\delta_0)=1$
- [[Soluzione fondamentale dell'equazione del calore]]: è l'antitrasformata di $e^{-D\xi^2t}$ (Equazioni di fisica matematica)
- [[Valore principale di 1 su x]]: $\mathcal F(\mathrm{v.p.}\frac1t)=-\pi i\,\mathrm{sign}$
