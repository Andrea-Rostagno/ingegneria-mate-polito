---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["spectrum of a bounded operator", "spettro di un operatore", "insieme risolvente", "resolvent set", "spettro puntuale", "point spectrum", "spettro residuo", "residual spectrum", "spettro continuo", "continuous spectrum", "teorema della mappa spettrale", "spectral mapping theorem"]
tags: [competenza, area/analisi]
---

# Spettro di un operatore limitato

> L'insieme dei $\lambda$ per cui $T-\lambda I$ non è invertibile: in dimensione infinita non contiene solo gli autovalori, ma anche valori "residui" e "continui".

## Definizione / enunciato
Sia $H\ne\{0\}$ di Hilbert, $T\in\mathcal B(H)$, $I=\mathrm{id}_H$ (Def. 10.18, 10.20).
$$\sigma(T)=\{\lambda\in\mathbb F:\ T-\lambda I\ \text{non è invertibile in }\mathcal B(H)\},\qquad\rho(T)=\mathbb F\setminus\sigma(T).$$
Decomposizione disgiunta $\sigma(T)=\sigma_p(T)\cup\sigma_r(T)\cup\sigma_c(T)$:
- $\sigma_p(T)=\{\lambda:\operatorname{Ker}(T-\lambda I)\ne\{0\}\}$ (autovalori);
- $\sigma_r(T)=\{\lambda:\operatorname{Ker}(T-\lambda I)=\{0\},\ \overline{\operatorname{Im}(T-\lambda I)}\ne H\}$;
- $\sigma_c(T)=\{\lambda:\operatorname{Ker}(T-\lambda I)=\{0\},\ \overline{\operatorname{Im}(T-\lambda I)}=H,\ \operatorname{Im}(T-\lambda I)\ne H\}$.
Se $\dim H<\infty$, $\sigma(T)=\sigma_p(T)$.

## Formule chiave
Prop. 10.22: $\sigma(T)$ è chiuso e contenuto in $\overline B(0,\|T\|_{op})$; se $\mathbb F=\mathbb C$ è non vuoto.
Prop. 10.23: $\sigma(T^*)=\{\bar\lambda:\lambda\in\sigma(T)\}$; $T$ invertibile $\iff0\notin\sigma(T)$, e $\sigma(T^{-1})=\{\lambda^{-1}:\lambda\in\sigma(T)\}$; $\sigma(\alpha I)=\{\alpha\}$; **mappa spettrale** $\sigma(p(T))=p(\sigma(T))$ per $p$ polinomio (se $\mathbb F=\mathbb C$ o $\deg p\le1$).
Prop. 10.24: $T$ normale $\Rightarrow\sigma_r(T)=\emptyset$; autoaggiunto $\Rightarrow\sigma(T)\subseteq\mathbb R$; unitario $\Rightarrow\sigma(T)\subseteq\{|\lambda|=1\}$.

## Intuizione
In dimensione infinita $T-\lambda I$ può essere iniettivo senza essere suriettivo: o l'immagine non è nemmeno densa (spettro residuo) o è densa ma non chiusa (spettro continuo). La chiusura e la limitatezza vengono dal criterio di Neumann.

## Come si usa
Es. 10.25: $\sigma(D_w)=\overline{\{w_k\}}$ con $\sigma_p=\{w_k\}$; per lo shift sinistro $\sigma(S)=\sigma(S^*)=\overline B(0,1)$, con $\sigma_p(S)=B(0,1)$ (autovettori $(1,\lambda,\lambda^2,\dots)\in\ell^2$ per $|\lambda|<1$), $\sigma_c(S)=\partial B(0,1)$, mentre $\sigma_p(S^*)=\emptyset$, $\sigma_r(S^*)=B(0,1)$.

## Nei corsi
- **Analisi funzionale** (triennale): §10.3 "Spettro di un operatore limitato" (Def. 10.18, Oss. 10.19, Def. 10.20, Prop. 10.22-10.24, Es. 10.25, Prop. 10.26). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 156-163); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (pp. 10-13).

## Prerequisiti
- [[Operatore lineare limitato]]: invertibilità in B(H)
- [[Criterio di invertibilità di Neumann]]: spettro chiuso e limitato
- [[Operatore aggiunto]]: spettro dell'aggiunto e del normale
- [[Autovalori e autovettori]]: spettro puntuale

## Porta a
- [[Spettro di un operatore compatto]]: struttura discreta dello spettro

## Collegati
- [[Autospazio]]: E_T(λ) = Ker(T − λI)
- [[Operatore di shift]]: spettro residuo e continuo
- [[Operatore di moltiplicazione]]: spettro come chiusura dei valori
- [[Norma spettrale]]: in dimensione finita, raggio spettrale e norma
