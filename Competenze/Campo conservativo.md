---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["conservative vector field", "campo vettoriale conservativo", "potenziale di un campo", "campo gradiente", "indipendenza dal cammino", "path independence"]
tags: [competenza, area/analisi]
---

# Campo conservativo

> Un campo è conservativo in un aperto se è il gradiente di un potenziale: allora i suoi integrali di linea dipendono solo dagli estremi.

## Definizione / enunciato
$\Omega\subseteq\mathbb R^n$ aperto, $F:\Omega\to\mathbb R^n$ continuo. $F$ è **conservativo in $\Omega$** se esiste $f\in C^1(\Omega)$ con $F=\nabla f$ in $\Omega$; $f$ si chiama potenziale (a volte si usa la convenzione $F=-\nabla f$).

**Teorema (definizioni equivalenti).** Sono equivalenti:
1. $F$ è conservativo in $\Omega$;
2. $\oint_\gamma F\cdot dl=0$ per ogni curva chiusa $\gamma$ in $\Omega$;
3. $\int_{\gamma_1}F\cdot dl=\int_{\gamma_2}F\cdot dl$ per ogni coppia di curve in $\Omega$ con gli stessi estremi.

## Formule chiave
$$F=\nabla f\ \Rightarrow\ \int_\gamma F\cdot dl=f(\gamma(b))-f(\gamma(a)).$$
Dimostrazione: $\nabla f(\gamma(t))\cdot\gamma'(t)=\frac d{dt}f(\gamma(t))$ per la regola della catena.

## Intuizione
L'integrale è una differenza di potenziale, come l'energia potenziale per le forze conservative. 2 ⇔ 3 si vede concatenando $\gamma_1$ con $\gamma_2$ percorsa al contrario.

## Come si usa
Esempio della lezione: $\gamma(t)=(t^2,e^t+t)$, $t\in[0,1]$, e $F=(2x+e^y,\ xe^y)$. Il calcolo diretto è pesante; "a occhio" un potenziale è $f=x^2+xe^y$, quindi $\int_\gamma F\cdot dl=f(1,e+1)-f(0,1)=1+e^{e+1}$. Attenzione all'aperto: $F=\big(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\big)$ non è conservativo in $\mathbb R^2\setminus\{0\}$ (circuitazione $2\pi$) ma è $\nabla\arctan\frac yx$ nei semipiani $x>0$ e $x<0$.

## Nei corsi
- **Analisi 2** (triennale): definizione nella lezione sugli integrali di linea, equivalenze e differenza di potenziale nella lezione "campi conservativi". Fonti: `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 11-12); `triennale/ANNO 2/analisi 2/AII 11 2022 campi conservativi.pdf` (pp. 5-9, 14-18).

## Prerequisiti
- [[Gradiente]]: il campo è il gradiente di un potenziale
- [[Regola della catena in più variabili]]: ∫F·dl = f(γ(b))-f(γ(a))
- [[Integrale di linea]]: integrali di linea che dipendono solo dagli estremi

## Porta a
- [[Campo irrotazionale]]: campi irrotazionali
- [[Calcolo del potenziale]]: ricostruzione del potenziale
- [[Campo centrale]]: esempio di campo conservativo

## Collegati
- [[Forza conservativa]]: versione fisica del campo conservativo
- [[Potenziale elettrostatico]]: il campo elettrostatico è conservativo: circuitazione nulla, rot E = 0
